import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
type EnlaceVolverProps = {
 href: string
 children: string
}
// Enlace de "ir hacia atrás" con su flecha. El destino y el texto van por
// props, para poder reutilizarlo en cualquier página.
export function EnlaceVolver({ href, children }: EnlaceVolverProps) {
 return (
 <Link
 href={href}
 className="inline-flex items-center gap-2 text-sm text-texto-secundario
transition hover:text-texto"
 >
 <ArrowLeft className="h-4 w-4" aria-hidden="true" />
 {children}
 </Link>
 )
}