import Link from "next/link";
import type { Nota } from "@prisma/client";
import { BotonFavorita } from "@/components/BotonFavorita";
import { BotonBorrar } from "@/components/BotonBorrar";

type TarjetaNotaProps = {
  nota: Nota;
};

export function TarjetaNota({ nota }: TarjetaNotaProps) {
  const fechaFormateada = nota.creadoEn.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col gap-5 rounded-2xl border border-borde bg-superficie p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <Link
          href={`/notas/${nota.id}`}
          className="text-lg font-semibold leading-snug tracking-tight text-texto transition-opacity duration-200 hover:opacity-80 sm:text-xl"
        >
          {nota.titulo}
        </Link>

        <BotonFavorita
          id={nota.id}
          favorita={nota.favorita}
        />
      </div>

      {nota.contenido && (
        <p className="line-clamp-2 text-sm leading-7 text-texto-secundario">
          {nota.contenido}
        </p>
      )}

      <div className="flex items-end justify-between gap-4">
        <time
          dateTime={nota.creadoEn.toISOString()}
          className="text-xs font-medium tracking-wide text-texto-terciario"
        >
          {fechaFormateada}
        </time>

        <BotonBorrar id={nota.id} />
      </div>
    </article>
  );
}