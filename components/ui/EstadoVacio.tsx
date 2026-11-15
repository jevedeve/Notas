
import { NotebookPen } from "lucide-react";

type EstadoVacioProps = {
  titulo: string;
  subtitulo: string;
};

export function EstadoVacio({
  titulo,
  subtitulo,
}: EstadoVacioProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 px-6 py-12 text-center">
      <NotebookPen
        className="h-20 w-20 text-texto-terciario"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <div className="flex max-w-md flex-col gap-3">
        <h2 className="text-2xl font-bold tracking-tight text-texto">
          {titulo}
        </h2>

        <p className="text-sm leading-7 text-texto-secundario">
          {subtitulo}
        </p>
      </div>
    </div>
  );
}
