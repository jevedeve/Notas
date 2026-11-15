import type { Nota } from "@prisma/client";
import { EstadoVacio } from "@/components/ui/EstadoVacio";
import { TarjetaNota } from "@/components/TarjetaNota";

type ListaNotasProps = {
  notas: Nota[];
  tituloVacio: string;
  subtituloVacio: string;
};

export function ListaNotas({
  notas,
  tituloVacio,
  subtituloVacio,
}: ListaNotasProps) {
  if (notas.length === 0) {
    return (
      <EstadoVacio
        titulo={tituloVacio}
        subtitulo={subtituloVacio}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {notas.map((nota) => (
        <TarjetaNota
          key={nota.id}
          nota={nota}
        />
      ))}
    </div>
  );
}