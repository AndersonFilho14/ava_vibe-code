"use client"

import { useState } from "react"

const questoes = [
  {
    pergunta: "1. Qual é o primeiro passo recomendado para validar um código gerado por IA?",
    opcoes: [
      "Copiar e colar direto no projeto",
      "Ler o que foi gerado e comparar com o pedido original",
      "Apagar tudo e fazer do zero",
      "Rodar na produção sem olhar o código"
    ],
    resposta: 1
  },
  {
    pergunta: "2. O que pode acontecer quando o prompt (pedido) fornecido à IA é muito vago ou ambíguo?",
    opcoes: [
      "A IA se recusa a responder",
      "A IA preenche as lacunas com suposições, gerando código inesperado",
      "A IA gera um código perfeito e otimizado automaticamente",
      "O código gerado sempre terá zero bugs"
    ],
    resposta: 1
  },
  {
    pergunta: "3. Qual a importância de fornecer uma descrição específica de entradas e saídas no prompt?",
    opcoes: [
      "Diminuir o risco de surpresas e comportamentos indesejados no código",
      "Aumentar o tempo de resposta da IA",
      "Deixar a IA mais criativa e menos precisa",
      "Reduzir o tamanho dos arquivos fonte"
    ],
    resposta: 0
  },
  {
    pergunta: "4. Sobre Clean Code em códigos gerados por IA, qual destas é uma prática recomendada?",
    opcoes: [
      "Funções extensas que resolvem vários problemas de uma vez",
      "Nomes de variáveis abreviados ou de uma letra só",
      "Repetição de código sempre que possível para ganhar tempo",
      "Nomes claros para variáveis e funções, com responsabilidade única"
    ],
    resposta: 3
  },
  {
    pergunta: "5. Segundo as boas práticas de legibilidade e Clean Code, como tratar comentários em código gerado por IA?",
    opcoes: [
      "Devem estar presentes em todas as linhas",
      "Devem ser apagados sempre",
      "Devem ser mantidos apenas quando necessários para explicar o porquê de algo não trivial",
      "Comentários deixam o código mais lento e devem ser evitados"
    ],
    resposta: 2
  },
  {
    pergunta: "6. Qual a principal vantagem de investir tempo deixando um código de IA mais legível?",
    opcoes: [
      "Ele ocupará menos espaço no banco de dados",
      "Ele se torna mais fácil de manter, de revisar e de adaptar no futuro",
      "Isso garante que ele será imune a ataques hackers",
      "Aumenta imediatamente a velocidade de compilação"
    ],
    resposta: 1
  },
  {
    pergunta: "7. Qual é a forma mais segura de confirmar que um código gerado funciona na prática?",
    opcoes: [
      "Apenas ler o código e confiar plenamente nele",
      "Perguntar novamente à IA se o código está correto",
      "Testar a aplicação, executando o fluxo como um usuário faria",
      "Fazer uma análise estética do código"
    ],
    resposta: 2
  },
  {
    pergunta: "8. Em um teste manual adequado, o que deve ser verificado além do 'caminho feliz'?",
    opcoes: [
      "A paleta de cores da interface",
      "Valores inválidos e casos extremos",
      "O tempo que a IA levou para gerar o código",
      "O histórico do navegador"
    ],
    resposta: 1
  }
];

export default function Avaliacao() {
  const [etapa, setEtapa] = useState("inicio"); // inicio, perguntas, resultado
  const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0);
  const [respostasUsuario, setRespostasUsuario] = useState<number[]>([]);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<number | null>(null);

  const iniciarAvaliacao = () => {
    setEtapa("perguntas");
    setIndicePerguntaAtual(0);
    setRespostasUsuario([]);
    setOpcaoSelecionada(null);
  };

  const confirmarResposta = () => {
    if (opcaoSelecionada === null) return;

    const novasRespostas = [...respostasUsuario, opcaoSelecionada];
    setRespostasUsuario(novasRespostas);
    setOpcaoSelecionada(null);

    if (indicePerguntaAtual + 1 < questoes.length) {
      setIndicePerguntaAtual(indicePerguntaAtual + 1);
    } else {
      setEtapa("resultado");
    }
  };

  const calcularResultado = () => {
    let acertos = 0;
    let erros = 0;

    respostasUsuario.forEach((resposta, index) => {
      if (resposta === questoes[index].resposta) {
        acertos++;
      } else {
        erros++;
      }
    });

    return { acertos, erros };
  };

  if (etapa === "inicio") {
    return (
      <section className="bg-slate-900 p-8 rounded-xl border border-slate-800 text-center space-y-6">
        <h2 className="text-2xl font-bold text-slate-100">Avaliação de Conhecimento</h2>
        <p className="text-slate-300">
          Teste seus conhecimentos sobre revisão, validação e qualidade de código gerado por IA.
          São 8 questões objetivas baseadas no conteúdo acima.
        </p>
        <button
          onClick={iniciarAvaliacao}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Iniciar Avaliação
        </button>
      </section>
    );
  }

  if (etapa === "perguntas") {
    const perguntaAtual = questoes[indicePerguntaAtual];
    return (
      <section className="bg-slate-900 p-8 rounded-xl border border-slate-800 space-y-6">
        <div className="flex justify-between text-slate-400 text-sm mb-4">
          <span>Questão {indicePerguntaAtual + 1} de {questoes.length}</span>
          <span>Progresso: {Math.round(((indicePerguntaAtual) / questoes.length) * 100)}%</span>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-100">{perguntaAtual.pergunta}</h3>
        
        <div className="space-y-3 mt-6">
          {perguntaAtual.opcoes.map((opcao, index) => (
            <div
              key={index}
              onClick={() => setOpcaoSelecionada(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                opcaoSelecionada === index
                  ? "bg-blue-900/50 border-blue-500 text-blue-100"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800/80"
              }`}
            >
              {opcao}
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-6">
          <button
            onClick={confirmarResposta}
            disabled={opcaoSelecionada === null}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            {indicePerguntaAtual + 1 === questoes.length ? "Finalizar" : "Próxima Questão"}
          </button>
        </div>
      </section>
    );
  }

  if (etapa === "resultado") {
    const { acertos, erros } = calcularResultado();
    
    return (
      <section className="bg-slate-900 p-8 rounded-xl border border-slate-800 text-center space-y-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Resultado da Avaliação</h2>
        
        <div className="flex justify-center gap-8 py-6">
          <div className="bg-green-900/30 border border-green-800 p-6 rounded-xl min-w-[140px]">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-2">Acertos</p>
            <p className="text-4xl font-bold text-green-300">{acertos}</p>
          </div>
          
          <div className="bg-red-900/30 border border-red-800 p-6 rounded-xl min-w-[140px]">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Erros</p>
            <p className="text-4xl font-bold text-red-300">{erros}</p>
          </div>
        </div>

        <p className="text-slate-300 text-lg">
          {acertos === 8 && "Excelente! Você compreendeu perfeitamente todos os conceitos."}
          {acertos >= 5 && acertos < 8 && "Muito bom! Você absorveu a maior parte do conteúdo."}
          {acertos < 5 && "Você pode melhorar. Que tal revisar o resumo e tentar novamente?"}
        </p>

        <button
          onClick={iniciarAvaliacao}
          className="mt-6 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Refazer Avaliação
        </button>
      </section>
    );
  }

  return null;
}
