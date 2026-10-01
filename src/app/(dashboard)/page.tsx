import Link from "next/link"
import { PlayCircle, Clock } from "lucide-react"

/**
 * Página principal do Dashboard, exibe lista de cursos.
 */
export default function Dashboard() {
  const cursos = [
    {
      id: 1,
      titulo: "Introdução ao TypeScript",
      progresso: 60,
      aulas: 12,
      imagem: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
    },
    {
      id: 2,
      titulo: "Next.js Avançado",
      progresso: 10,
      aulas: 24,
      imagem: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-100">Meus Cursos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map(curso => (
          <div key={curso.id} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 hover:shadow-lg hover:shadow-black/20 transition-all">
            <div className="h-48 bg-slate-800 relative">
              <img src={curso.imagem} alt={curso.titulo} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <PlayCircle className="w-12 h-12 text-blue-500 drop-shadow-md" />
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-lg text-slate-100 mb-2">{curso.titulo}</h3>
              
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{curso.aulas} aulas</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-300">Progresso</span>
                  <span className="text-slate-400">{curso.progresso}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full rounded-full" 
                    style={{ width: `${curso.progresso}%` }}
                  />
                </div>
              </div>

              <Link 
                href={`/aulas/${curso.id}`}
                className="mt-6 block w-full py-2 text-center bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 font-medium rounded-lg transition-colors"
              >
                Continuar aula
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
