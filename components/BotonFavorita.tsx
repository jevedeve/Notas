"use client";

import { Star } from "lucide-react";
import { useAlternarFavorita } from "@/hooks/useAlternarFavorita";

type BotonFavoritaProps = {
  id: string;
  favorita: boolean;
};

export function BotonFavorita({
  id,
  favorita,
}: BotonFavoritaProps) {
  const { cargando, manejarClic } = useAlternarFavorita(id);

  return (
    <button
      type="button"
      onClick={manejarClic}
      disabled={cargando}
      aria-label={
        favorita
          ? "Quitar de favoritas"
          : "Marcar como favorita"
      }
      className="inline-flex items-center justify-center rounded-xl p-2.5 transition-all duration-200 hover:scale-110 hover:bg-superficie-secundaria active:scale-95 disabled:pointer-events-none disabled:opacity-50"
    >
      <Star
        className={`h-5 w-5 ${
          favorita
            ? "fill-acento text-acento"
            : "text-texto-terciario"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}