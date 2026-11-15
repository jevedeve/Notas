
import type { ComponentProps } from "react";
import { Loader2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type BotonProps = ComponentProps<"button"> & {
  variante?: "primario" | "peligro" | "fantasma";
  cargando?: boolean;
  icono?: LucideIcon;
};

export function Boton({
  variante = "primario",
  cargando = false,
  icono: Icono,
  disabled,
  className = "",
  children,
  ...props
}: BotonProps) {
  const estilosBase =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primario disabled:pointer-events-none disabled:opacity-50";

  const estilosVariantes = {
    primario:
      "bg-primario text-texto-invertido hover:bg-primario/90",
    peligro:
      "bg-error text-texto-invertido hover:bg-error/90",
    fantasma:
      "bg-transparent text-texto hover:bg-superficie-secundaria",
  };

  return (
    <button
      {...props}
      disabled={disabled || cargando}
      className={`${estilosBase} ${estilosVariantes[variante]} ${className}`}
    >
      {cargando ? (
        <Loader2
          className="h-4 w-4 animate-spin"
          aria-hidden="true"
        />
      ) : Icono ? (
        <Icono className="h-4 w-4" aria-hidden="true" />
      ) : null}

      {children}
    </button>
  );
}
