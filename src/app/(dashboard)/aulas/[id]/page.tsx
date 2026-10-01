"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

/**
 * Página de visualização da aula, contendo o vídeo e os exercícios.
 */
export default function AulaPage() {
  const params = useParams();
  const [exerciseAnswer, setExerciseAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock dados da aula
  const aula = {
    id: params.id,
    titulo: "Introdução ao Next.js e React",
    descricao: "Nesta aula você aprenderá os conceitos básicos do Next.js e como ele se integra perfeitamente com o React.",
    videoUrl: "https://www.youtube.com/embed/Sklc_fQBmcs",
    exercicio: {
      pergunta: "Qual é a principal vantagem do Next.js em relação ao React puro (CRA)?",
      opcoes: [
        "Ele usa menos memória RAM no navegador",
        "Ele permite renderização do lado do servidor (SSR) nativamente",
        "Ele é uma linguagem de programação nova",
        "Ele não precisa de Node.js para rodar em produção"
      ],
      respostaCorreta: 1
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">{aula.titulo}</h1>
        <p className="text-slate-400">{aula.descricao}</p>
      </div>

      <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-slate-800">
        <iframe 
          width="100%" 
          height="100%" 
          src={aula.videoUrl} 
          title={aula.titulo}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-800 mt-8">
        <h2 className="text-2xl font-bold text-slate-100 mb-6">Exercício de Fixação</h2>
        
        <div className="space-y-4">
          <p className="text-lg text-slate-300 font-medium mb-4">{aula.exercicio.pergunta}</p>
          
          {aula.exercicio.opcoes.map((opcao, index) => {
            const isSelected = exerciseAnswer === index;
            let bgColor = "bg-slate-800 hover:bg-slate-700 border-slate-700";
            let textColor = "text-slate-300";
            let Icon = Circle;

            if (isSubmitted) {
              if (index === aula.exercicio.respostaCorreta) {
                bgColor = "bg-green-900/40 border-green-500/50";
                textColor = "text-green-400";
                Icon = CheckCircle2;
              } else if (isSelected) {
                bgColor = "bg-red-900/40 border-red-500/50";
                textColor = "text-red-400";
              }
            } else if (isSelected) {
              bgColor = "bg-blue-900/40 border-blue-500/50";
              textColor = "text-blue-300";
              Icon = CheckCircle2;
            }

            return (
              <button
                key={index}
                disabled={isSubmitted}
                onClick={() => setExerciseAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${bgColor} ${textColor}`}
              >
                <Icon className={`w-6 h-6 ${isSelected && !isSubmitted ? "text-blue-400" : ""}`} />
                <span className="flex-1">{opcao}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <div className="text-sm">
            {isSubmitted && exerciseAnswer === aula.exercicio.respostaCorreta && (
              <span className="text-green-400 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Resposta Correta! Progresso salvo.
              </span>
            )}
            {isSubmitted && exerciseAnswer !== aula.exercicio.respostaCorreta && (
              <span className="text-red-400 font-bold">
                Resposta Incorreta. Assista ao vídeo novamente e tente outra vez.
              </span>
            )}
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={exerciseAnswer === null || isSubmitted}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isSubmitted ? "Enviado" : "Enviar Resposta"}
          </button>
        </div>
      </div>
    </div>
  );
}
