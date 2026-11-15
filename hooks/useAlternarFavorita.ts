"use client";

import { useState } from "react";
import { alternarFavorita } from "@/actions/acciones-notas";
import { toast } from "sonner";

export function useAlternarFavorita(id: string) {
  const [cargando, setCargando] = useState<boolean>(false);

  async function manejarClic() {
    setCargando(true);

    try {
      const resultado = await alternarFavorita(id);

      if (resultado.exito) {
        toast.success(resultado.mensaje);
      } else {
        toast.error(resultado.mensaje);
      }
    } catch {
      toast.error("Ha ocurrido un error al cambiar el estado de favorita.");
    } finally {
      setCargando(false);
    }
  }

  return {
    cargando,
    manejarClic,
  };
}