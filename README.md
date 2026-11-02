# 🎓 Vibe AVA — Compreensão e Revisão de Código Gerado por IA

Plataforma de Ambiente Virtual de Aprendizagem (**Vibe AVA**) desenvolvida em **Next.js (App Router)** com foco no estudo prático de boas práticas para compreensão, validação, legibilidade (*Clean Code*) e testes de códigos gerados por Inteligência Artificial.

---

## ✨ Funcionalidades

- **🎬 Vídeo-Aula Integrada:** Player incorporado diretamente no Dashboard com a aula principal do curso.
- **📚 Resumo Estruturado dos Tópicos:**
  1. Como validar um código gerado por IA;
  2. Informações ambíguas e o impacto no código;
  3. Melhoria na legibilidade (*Clean Code*);
  4. Testes e como fazer um teste manual.
- **📖 Material Complementar:**
  - **Livro Digital Interativo:** Acesso direto ao e-book no [FlipHTML5](https://online.fliphtml5.com/anderson_filho/zwqy/).
  - **Infográfico — Checklist Final de Aprovação:** Visualização integrada na página (`/infografico.png`) e opção de abertura/download em PDF (`/infografico.pdf`).
- **📝 Avaliação de Conhecimento:** Quiz interativo de 8 questões objetivas com barra de progresso, feedback imediato e contabilização de acertos e erros.
- **🤖 Governança de Desenvolvimento com IA (`AGENTS.md`):** Fluxo de trabalho estruturado em três papéis sequenciais (**PM / Planejador**, **Desenvolvedor** com padrão `one-line-fix` e *Clean Code*, e **Tester / QA** com foco em testes E2E).

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js 16](https://nextjs.org/)** (App Router)
- **[React 19](https://react.dev/)** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[Lucide React](https://lucide.dev/)** (Ícones)
- **[NextAuth.js](https://next-auth.js.org/)** (Autenticação)
- **[Playwright](https://playwright.dev/)** (Testes Fim a Fim — E2E)

---

## 📂 Estrutura do Projeto

```text
├── public/
│   ├── infografico.pdf          # Infográfico em PDF (Checklist Final de Aprovação)
│   └── infografico.png          # Versão em imagem do infográfico para exibição no Dashboard
├── src/
│   ├── app/
│   │   ├── (dashboard)/
│   │   │   ├── aulas/[id]/      # Página individual de aula e exercício de fixação
│   │   │   ├── layout.tsx       # Layout principal com Sidebar e Header
│   │   │   └── page.tsx         # Dashboard principal (vídeo, resumo, materiais e avaliação)
│   │   ├── api/auth/            # Rotas de autenticação (NextAuth)
│   │   └── login/               # Página de login do aluno
│   ├── components/
│   │   ├── layout/              # Componentes estruturais (Header e Sidebar)
│   │   └── Avaliacao.tsx        # Componente interativo de avaliação (8 questões)
│   └── lib/
│       └── utils.ts             # Funções utilitárias de estilização
├── tests/
│   └── e2e/
│       └── ava-flow.spec.ts     # Suíte de testes fim a fim (E2E) com Playwright
└── AGENTS.md                    # Diretrizes da equipe de agentes (PM, Desenvolvedor e Tester)
```

---

## 🚀 Como Executar o Projeto

### 1. Instalar as dependências
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 3. Executar a verificação de tipos e build de produção
```bash
npx tsc --noEmit
npm run build
```

### 4. Executar os testes E2E (Playwright)
```bash
npx playwright test
```
