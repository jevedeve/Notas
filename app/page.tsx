import { FormularioNota } from "@/components/inicio/FormularioNota";
import { ListaNotas } from "@/components/ListaNotas";
import { obtenerNotas } from "@/lib/notas";

export const dynamic = "force-dynamic";

export default async function InicioPage() {
  const notas = await obtenerNotas();

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
          Mis notas
        </h1>

        <p className="text-sm font-medium tracking-wide text-texto-secundario">
          {textoCantidad}
        </p>
      </header>

      <FormularioNota />

      <ListaNotas
        notas={notas}
        tituloVacio="Todavía no tienes notas"
        subtituloVacio="Crea tu primera nota con el formulario de arriba y aparecerá aquí."
      />
    </main>
  );
}