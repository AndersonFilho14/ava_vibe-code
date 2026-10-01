import Link from "next/link"
import { BookOpen, CheckCircle, Home, PlayCircle, Settings } from "lucide-react"

/**
 * Componente de barra lateral (Sidebar) para navegação principal do AVA.
 */
export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col bg-slate-900 text-white min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <BookOpen className="w-8 h-8 text-blue-500" />
        <span className="text-xl font-bold">Vibe AVA</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
          <Home className="w-5 h-5" />
          <span>Início</span>
        </Link>
        <Link href="/cursos" className="flex items-center gap-3 px-3 py-2 rounded-md bg-slate-800 transition-colors text-blue-400">
          <PlayCircle className="w-5 h-5" />
          <span>Meus Cursos</span>
        </Link>
        <Link href="/progresso" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
          <CheckCircle className="w-5 h-5" />
          <span>Meu Progresso</span>
        </Link>
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-800">
        <Link href="/configuracoes" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Configurações</span>
        </Link>
      </div>
    </aside>
  )
}
