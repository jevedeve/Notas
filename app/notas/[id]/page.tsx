import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { obtenerNotaPorId } from "@/lib/notas";
import { EnlaceVolver } from "@/components/nav/EnlaceVolver";
import { BotonFavorita } from "@/components/BotonFavorita";
import { BotonBorrar } from "@/components/BotonBorrar";

export const dynamic = "force-dynamic";

export default async function PaginaNota(
  props: PageProps<"/notas/[id]">
) {
  const { id } = await props.params;

  const nota = await obtenerNotaPorId(id);

  if (!nota) {
    notFound();
  }

  const fechaFormateada = nota.creadoEn.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <EnlaceVolver href="/">Volver</EnlaceVolver>

      <article className="flex flex-col gap-8 rounded-2xl border border-borde bg-superficie p-6 shadow-sm sm:p-10">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-texto sm:text-4xl lg:text-5xl">
            {nota.titulo}
          </h1>

          <time
            dateTime={nota.creadoEn.toISOString()}
            className="text-sm font-medium tracking-wide text-texto-terciario"
          >
            {fechaFormateada}
          </time>
        </header>

        {nota.contenido ? (
          <p className="whitespace-pre-wrap text-base leading-8 text-texto">
            {nota.contenido}
          </p>
        ) : (
          <p className="text-sm italic leading-7 text-texto-terciario">
            Esta nota no tiene contenido
          </p>
        )}

        <div className="flex items-center justify-end gap-3 border-t border-borde pt-6">
          <BotonFavorita
            id={nota.id}
            favorita={nota.favorita}
          />

          <BotonBorrar id={nota.id} />
        </div>
      </article>
    </main>
  );
}

export async function generateMetadata(
  props: PageProps<"/notas/[id]">
): Promise<Metadata> {
  const { id } = await props.params;

  const nota = await obtenerNotaPorId(id);

  if (!nota) {
    return {
      title: "Nota no encontrada",
    };
  }

  return {
    title: nota.titulo,
  };
}