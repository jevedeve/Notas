
import { prisma } from "@/lib/prisma";
import type { Nota } from "@prisma/client";

/**
 * Obtiene todas las notas.
 * Primero muestra las favoritas y después las demás.
 * Dentro de cada grupo, muestra las más recientes primero.
 */
export async function obtenerNotas(): Promise<Nota[]> {
  return await prisma.nota.findMany({
    orderBy: [
      { favorita: "desc" },
      { creadoEn: "desc" },
    ],
  });
}

/**
 * Obtiene únicamente las notas favoritas.
 * Las más recientes aparecen primero.
 */
export async function obtenerNotasFavoritas(): Promise<Nota[]> {
  return await prisma.nota.findMany({
    where: {
      favorita: true,
    },
    orderBy: {
      creadoEn: "desc",
    },
  });
}

/**
 * Obtiene una nota por su identificador.
 * Devuelve null si no existe.
 */
export async function obtenerNotaPorId(id: string): Promise<Nota | null> {
  return await prisma.nota.findUnique({
    where: {
      id,
    },
  });
}
