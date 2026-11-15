
"use client";

import { useState, useRef, useEffect } from "react";
import { borrarNota } from "@/actions/acciones-notas";
import { toast } from "sonner";

export function useBorrarNota(id: string) {
  const [armado, setArmado] = useState<boolean>(false);
  const [borrando, setBorrando] = useState<boolean>(false);

  const temporizadorRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  useEffect(() => {
    if (!armado) {
      return;
    }

    temporizadorRef.current = setTimeout(() => {
      setArmado(false);
      temporizadorRef.current = null;
    }, 3000);

    return () => {
      if (temporizadorRef.current !== null) {
        clearTimeout(temporizadorRef.current);
        temporizadorRef.current = null;
      }
    };
  }, [armado]);

  async function manejarClic() {
    if (!armado) {
      setArmado(true);
      return;
    }

    setArmado(false);
    setBorrando(true);

    try {
      const resultado = await borrarNota(id);

      if (resultado.exito) {
        toast.success(resultado.mensaje);
      } else {
        toast.error(resultado.mensaje);
      }
    } catch {
      toast.error("Ha ocurrido un error al borrar la nota.");
    } finally {
      setBorrando(false);
    }
  }

  return {
    armado,
    borrando,
    manejarClic,
  };
}
