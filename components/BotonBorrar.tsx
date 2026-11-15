
"use client";

import { Trash2 } from "lucide-react";
import { Boton } from "@/components/ui/Boton";
import { useBorrarNota } from "@/hooks/useBorrarNota";

type BotonBorrarProps = {
  id: string;
};

export function BotonBorrar({ id }: BotonBorrarProps) {
  const { armado, borrando, manejarClic } = useBorrarNota(id);

  return (
    <Boton
      variante="peligro"
      icono={Trash2}
      cargando={borrando}
      onClick={manejarClic}
      type="button"
    >
      {armado ? "¿Seguro?" : "Borrar"}
    </Boton>
  );
}
