/**
 * Página principal do Dashboard: tema do curso, vídeo e resumo dos tópicos abordados.
 */
export default function Dashboard() {
  const curso = {
    titulo: "Compreensão e revisão de código gerado por IA",
    videoUrl: "https://www.youtube.com/embed/e7L_8XVQBik",
  }

  const topicos = [
    {
      titulo: "Como validar um código gerado por IA",
      texto:
        "O primeiro passo é conferir se o código realmente faz o que deveria. Leia o que foi gerado, compare com o que você pediu e confirme que cada parte resolve o problema. Código de IA costuma parecer correto, mas pode ter erros sutis, casos esquecidos ou comportamentos inesperados. Nunca use sem entender.",
    },
    {
      titulo: "Informações ambíguas e o impacto no código",
      texto:
        "Quando o pedido (prompt) é vago, a IA preenche as lacunas com suposições, e o resultado pode ser diferente do que você queria. Pedidos ambíguos geram código ambíguo. Por isso, seja claro sobre o objetivo, as entradas, as saídas e as regras. Quanto mais específica a descrição, menor o risco de surpresas.",
    },
    {
      titulo: "Melhoria na legibilidade (Clean Code)",
      texto:
        "Inspirado no livro Clean Code, vale revisar o código gerado para deixá-lo mais legível: nomes claros para variáveis e funções, funções pequenas com uma única responsabilidade, pouca repetição e comentários só quando necessários. Código legível é mais fácil de manter e de revisar.",
    },
    {
      titulo: "Testes e como fazer um teste manual",
      texto:
        "Testar é a forma mais segura de confirmar que o código funciona. O teste manual é o mais simples: rode a aplicação, execute o fluxo como um usuário faria e compare o resultado com o esperado. Teste o caminho normal, valores inválidos e casos extremos, e anote o que falhou para corrigir.",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">{curso.titulo}</h1>
        <p className="mt-2 text-slate-400">
          Neste vídeo e resumo, abordo como entender, validar e melhorar o código que a IA gera para nós.
        </p>
      </div>

      <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-slate-800">
        <iframe
          width="100%"
          height="100%"
          src={curso.videoUrl}
          title={curso.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100">Resumo dos tópicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topicos.map((topico, index) => (
            <article
              key={topico.titulo}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800"
            >
              <h3 className="font-bold text-lg text-blue-400 mb-2">
                {index + 1}. {topico.titulo}
              </h3>
              <p className="text-slate-300 leading-relaxed">{topico.texto}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
