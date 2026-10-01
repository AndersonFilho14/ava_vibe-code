import { Bell, Search, UserCircle } from "lucide-react"

/**
 * Componente de cabeçalho (Header) principal do sistema.
 */
export function Header() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/50 px-6 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Buscar cursos, aulas..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-slate-800 relative transition-colors">
          <Bell className="w-5 h-5 text-slate-400" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-slate-800 cursor-pointer">
          <div className="text-sm text-right hidden sm:block">
            <p className="font-semibold text-slate-200">Aluno</p>
            <p className="text-slate-500 text-xs">aluno@vibe.com</p>
          </div>
          <UserCircle className="w-8 h-8 text-slate-500" />
        </div>
      </div>
    </header>
  )
}
