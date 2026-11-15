
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type ResultadoAccion = {
  exito: boolean;
  mensaje: string;
};

/**
 * Crea una nueva nota.
 * Valida el título y convierte el contenido vacío en null.
 */
export async function crearNota(
  datosFormulario: FormData
): Promise<ResultadoAccion> {
  try {
    const titulo = datosFormulario.get("titulo");
    const contenido = datosFormulario.get("contenido");

    const titulonota = typeof titulo === "string" ? titulo.trim() : "";
    const contenidonota =
      typeof contenido === "string" ? contenido.trim() : "";

    if (!titulonota) {
      return {
        exito: false,
        mensaje: "El título no puede estar vacío.",
      };
    }

    if (titulonota.length > 80) {
      return {
        exito: false,
        mensaje: "El título no puede superar los 80 caracteres.",
      };
    }

    await prisma.nota.create({
      data: {
        titulo: titulonota,
        contenido: contenidonota || null,
      },
    });

    revalidatePath("/");
    revalidatePath("/favoritas");

    return {
      exito: true,
      mensaje: "Nota creada correctamente.",
    };
  } catch {
    return {
      exito: false,
      mensaje: "Error al crear la nota.",
    };
  }
}

/**
 * Invierte el estado de favorita de una nota.
 */
export async function alternarFavorita(
  id: string
): Promise<ResultadoAccion> {
  try {
    const nota = await prisma.nota.findUnique({
      where: {
        id,
      },
    });

    if (!nota) {
      return {
        exito: false,
        mensaje: "La nota no existe.",
      };
    }

    await prisma.nota.update({
      where: {
        id,
      },
      data: {
        favorita: !nota.favorita,
      },
    });

    revalidatePath("/");
    revalidatePath("/favoritas");

    return {
      exito: true,
      mensaje: nota.favorita
        ? "Nota eliminada de favoritas."
        : "Nota añadida a favoritas.",
    };
  } catch {
    return {
      exito: false,
      mensaje: "Error al cambiar el estado de favorita.",
    };
  }
}

/**
 * Borra una nota por su identificador.
 */
export async function borrarNota(
  id: string
): Promise<ResultadoAccion> {
  try {
    await prisma.nota.delete({
      where: {
        id,
      },
    });

    revalidatePath("/");
    revalidatePath("/favoritas");

    return {
      exito: true,
      mensaje: "Nota eliminada correctamente.",
    };
  } catch {
    return {
      exito: false,
      mensaje: "Error al eliminar la nota.",
    };
  }
}
