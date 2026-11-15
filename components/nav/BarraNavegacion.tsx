import Link from 'next/link'
// Navegación principal de la web: se pinta una sola vez, en app/layout.tsx,
// así que aparece en todas las rutas.
export function BarraNavegacion() {
return (
 <nav className="border-b border-borde">
 <div className="mx-auto flex max-w-4xl gap-6 px-4 py-4 text-sm font-medium">
 <Link href="/" className="hover:underline">
 Todas las notas
 </Link>
 <Link href="/favoritas" className="hover:underline">
 Favoritas
 </Link>
 </div>
 </nav>
 )
}