import type { Metadata } from "next";
import { ListaNotas } from "@/components/ListaNotas";
import { obtenerNotasFavoritas } from "@/lib/notas";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Favoritas",
};

export default async function FavoritasPage() {
  const notas = await obtenerNotasFavoritas();

  const cantidadNotas = notas.length;

  const textoCantidad =
    cantidadNotas === 0
      ? "Ninguna nota todavía"
      : cantidadNotas === 1
        ? "1 nota"
        : `${cantidadNotas} notas`;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:gap-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-texto sm:text-5xl">
          Favoritas
        </h1>

        <p className="text-sm font-medium tracking-wide text-texto-secundario">
          {textoCantidad}
        </p>
      </header>

      <ListaNotas
        notas={notas}
        tituloVacio="Sin favoritas"
        subtituloVacio="Marca una nota con la estrella para verla aquí"
      />
    </main>
  );
}