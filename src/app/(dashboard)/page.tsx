/**
 * Página principal do Dashboard, exibe o vídeo em destaque.
 */
export default function Dashboard() {
  const video = {
    titulo: "Meu Vídeo",
    videoUrl: "https://www.youtube.com/embed/e7L_8XVQBik",
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-100">{video.titulo}</h1>
      </div>

      <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-slate-800">
        <iframe
          width="100%"
          height="100%"
          src={video.videoUrl}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
