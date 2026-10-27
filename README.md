# 🚌 Tripply (Trip Report)

> **O seu gerador e organizador inteligente de relatórios para transporte universitário e listas de viagem.**

Tripply é uma aplicação web progressiva (PWA) desenvolvida para transformar listas de passageiros desorganizadas e caóticas compartilhadas em grupos de WhatsApp (comuns no transporte universitário entre cidades e polos acadêmicos) em relatórios limpos, numerados, segmentados por horários e com contagem de passageiros por ponto de embarque.

---

## 📋 Sumário

- [Visão Geral e Contexto](#-visão-geral-e-contexto)
- [Funcionalidades e Casos de Uso](#-funcionalidades-e-casos-de-uso)
- [Arquivo de Referência para Testes (`lista.txt`)](#-arquivo-de-referência-para-testes-listatxt)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
  - [Fluxo de Uso na Aplicação](#fluxo-de-uso-na-aplicação)
  - [Instalação e Execução Local](#instalação-e-execução-local)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Autor](#-autor)

---

## 🎯 Visão Geral e Contexto

No cotidiano do transporte de vans e ônibus universitários (por exemplo, no itinerário ligando cidades da Bahia como Serrinha, Bandiaçu e região aos polos de ensino em Feira de Santana), os passageiros enviam confirmações diárias de presença em grupos de WhatsApp.

Essas mensagens acumulam:
- Erros de digitação, pontuações erráticas e ausência de espaços;
- Caracteres invisíveis inseridos pelo WhatsApp (como *Word Joiners* e espaços de largura zero);
- Observações de pontos de embarque ou horários soltos no meio do texto;
- Passageiros com rotinas distintas: quem vai de manhã e volta ao meio-dia, quem só vai à tarde, quem só faz o trajeto de volta, etc.

O **Tripply** processa esse texto bruto através de regras de *parsing* e tratamento textual resiliente, gerando listas separadas por horário, contabilidade precisa dos pontos de embarque e histórico comparativo diário.

---

## ✨ Funcionalidades e Casos de Uso

### 1. 🧹 Parser Inteligente de Texto
- **Reconhecimento de Instituições**: Identifica e padroniza mais de 25 instituições de ensino (ex.: UEFS, UNEF, UNEX, FAN, FAT/UNIFAT, SENAI, PRÓ SABER, UNIFACS, UFRB, PITÁGORAS, ESTÁCIO, CNS, COUDE, AVANCE, etc.).
- **Tolerância a Variações Linguísticas**: Entende variações comuns de digitação como `"ida"`, `"idaa"`, `"vai"`, `"ide"`, `"lda"`, `"volta"`, `"voltando"`, `"voita"`, `"vinda"`, `"vespertino"`, `"vesp"`, `"vesper"`.
- **Renumeração Automática**: Reorganiza e numera sequencialmente cada passageiro dentro da sua respectiva instituição, eliminando numerações duplicadas ou corrompidas.

### 2. 🕒 Segmentação por Horários
- **05h (Ida Geral)**:
  - Gera a lista com todos os passageiros confirmados para o trajeto matutino de ida.
  - **Mapeamento de Pontos de Embarque**: Identifica automaticamente passageiros que embarcam em pontos específicos da rota (ex.: Rodoviária, Vilatóide, Coca-Cola, Quadra, Serraria, Fluminense, Terra Nova, Tapera, Sossego, Posto Avenida, Cidade Jardim, Bandiaçu/Bandarrinha, Posto Cajueiro, Olhos D'Água).
- **12h (Volta Matutino / Meio-dia)**:
  - Filtra quem faz ida e volta no turno matutino mais os passageiros que pegam apenas o retorno do almoço.
- **17h (Volta Vespertino / Noite)**:
  - Filtra os passageiros que retornam no turno vespertino/noturno.

### 3. 📊 Panorama, Insights & Gráficos
- **Panorama Geral**: Contagem consolidada de passageiros para Ida, Volta e Volta Vespertino.
- **Comparativo com a Lista Anterior**: Exibe o saldo (+ ou - passageiros) em relação ao dia anterior registrado.
- **Gráficos Históricos**: Gráfico de tendências construído com **MUI X-Charts** demonstrando a movimentação dos últimos dias registrados no armazenamento local.

### 4. 📲 Ações Rápidas & Integração com WhatsApp
- **Envio de Lista Formatada**: Botão com link direto para o WhatsApp (`api.whatsapp.com/send`) contendo a lista limpa e pronta para publicação no grupo.
- **Iniciar Lista do Dia Seguinte**: Cria um modelo padronizado com dia da semana, data calculada e cabeçalhos de faculdades vazios para o dia seguinte.
- **Iniciar Lista Personalizada ("rp11")**: Cria o modelo do próximo dia já incluindo o organizador/passageiro pré-marcado no ponto habitual.
- **Reportar Erro**: Monta uma mensagem com a data, hora e a lista em análise para facilitar o suporte e resolução de inconsistências.

### 5. 📱 PWA (Progressive Web App)
- Funciona offline através de Service Worker com cache gerenciado pelo **Vite PWA / Workbox**.
- Instalável na tela inicial de dispositivos móveis (Android/iOS) e desktop, operando em tela cheia como um aplicativo nativo.

---

## 🧪 Arquivo de Referência para Testes (`lista.txt`)

Na raiz do repositório existe o arquivo [`lista.txt`](./lista.txt). Ele é um **caso real de estresse (stress-test)**, contendo inúmeras adversidades comuns no dia a dia do WhatsApp para comprovar a robustez dos algoritmos de limpeza e separação.

### Adversidades presentes no `lista.txt`:

| Linha(s) | Exemplo no `lista.txt` | Adversidade / Desafio Técnico | Como o Tripply lida |
| :--- | :--- | :--- | :--- |
| **Linha 38** | `SENAI.          1.Misael junior (ida e volta)` | Nome da faculdade e passageiro colados na mesma linha com excesso de espaços em branco e ponto final. | Detecta espaços consecutivos (`cleanWhiteSpace`), quebra a linha e separa o cabeçalho da instituição do nome do aluno. |
| **Linhas 7, 8, 10, 19, etc.** | `4. ⁠Gabriele`, `7. ⁠ Anne Caroline` | Caracteres Unicode invisíveis (*Word Joiner* `\u2060` ou *Zero-Width Space*) inseridos pelo WhatsApp ao copiar listas numeradas. | Sanitização via Regex (`replace(/[^\w\sÀ-ÿ]+/gu, ' ')`), limpando caracteres invisíveis sem danificar acentuação ou espaços válidos. |
| **Linhas 4, 5, 6** | `1.Gilma(ida...)`, `2 .Denise  (...)` | Variações de formatação: ausência de espaços antes de parênteses ou espaços soltos antes do ponto da numeração. | Tokenização e substituição de numerações antigas por uma contagem sequencial limpa. |
| **Linha 32** | `7. ⁠Ludmila (ida e volta` | Parênteses não fechado ao final do registro do passageiro. | Reconhece as palavras-chave de intenção (`ida`, `volta`) independentemente do fechamento de parênteses. |
| **Linhas 14–23** | `PRO SABER` | Nome de faculdade composto por duas palavras. | Agrupa `"pro"` + `"saber"` como um único identificador de instituição para não considerar como nomes avulsos. |
| **Linhas 26, 30, 35, 37** | `meio dia`, `posto avenida`, `Bandiaçu` | Passageiros com pontos e observações adicionais no mesmo registro. | O algoritmo preserva a observação do passageiro enquanto alimenta a contagem do componente `PointsGo`. |
| **Linhas 30, 33, 36, 37** | `5. ⁠Rutielen (volta) meio dia`, `8. Rian (volta)` | Passageiros que utilizam apenas o trecho de volta. | Inclui os passageiros na lista das 12h/17h e os exclui da lista matutina de 05h (Ida). |

---

## 🛠 Tecnologias Utilizadas

- **Linguagem & Framework**:
  - [React 19](https://react.dev/) — Interface declarativa baseada em componentes funcionais e hooks.
  - [TypeScript](https://www.typescriptlang.org/) — Tipagem estática e interfaces para garantir previsibilidade e robustez.
- **Build Tool & Bundler**:
  - [Vite 7](https://vitejs.dev/) — Servidor de desenvolvimento ultrarrápido com Hot Module Replacement (HMR).
- **Estilização**:
  - [Tailwind CSS v4](https://tailwindcss.com/) — Estilização utilitária moderna via plugin oficial `@tailwindcss/vite`.
  - Design com efeito de vidro fosco (*glassmorphism*) utilizando `backdrop-blur` e transparências.
- **Componentes & Gráficos**:
  - [MUI (Material UI)](https://mui.com/) — Elementos auxiliares de interface.
  - [MUI X-Charts](https://mui.com/x/react-charts/) — Gráficos responsivos para exibição do histórico de passageiros.
  - [Emotion](https://emotion.sh/) — Biblioteca de CSS-in-JS requerida pelo ecossistema MUI.
- **PWA & Offline**:
  - [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) — Configuração de Service Worker, cache de assets e Web App Manifest.
- **Persistência de Dados**:
  - `sessionStorage` — Armazenamento volátil da lista sendo editada na sessão atual.
  - `localStorage` — Armazenamento persistente das últimas 10 listas diárias e controle de versão/changelog.

---

## 📁 Estrutura do Projeto

```text
trip_report/
├── public/                 # Favicon e ícones do PWA
├── src/
│   ├── assets/             # Fontes (RockSalt), logos e imagens de fundo
│   ├── components/         # Componentes visuais
│   │   ├── ui/             # Botões, inputs e componente de gráfico
│   │   ├── Changelog.tsx   # Modal de notas de atualização de versão
│   │   ├── Comparison.tsx  # Comparador de dados com o dia anterior
│   │   ├── ListEdited.tsx  # Visualizador de lista processada
│   │   ├── NavBar.tsx      # Barra inferior de navegação
│   │   ├── Panorama.tsx    # Card resumo com totais e atalho do WhatsApp
│   │   ├── PointsGo.tsx    # Contador de passageiros por ponto de embarque
│   │   ├── SideBar.tsx     # Menu lateral com atalhos de criação e reporte
│   │   └── Title.tsx       # Cabeçalho da aplicação
│   ├── functions/          # Núcleo da lógica de negócio
│   │   ├── Calcs.ts        # Contadores de passageiros e pontos de embarque
│   │   ├── Edits.ts        # Parsers e geradores das listas (Ida, 12h, 17h)
│   │   └── utils.ts        # Utilitários de data, localStorage, PWA e WhatsApp
│   ├── interfaces/         # Interfaces e contratos TypeScript
│   ├── pages/              # Telas principais (Home, Insights, Edited, ListNull)
│   ├── types/              # Tipos estruturais de dados
│   ├── index.css           # Estilos globais e Tailwind CSS
│   └── main.tsx            # Ponto de entrada React
├── index.html              # HTML base com meta tags e fontes
├── lista.txt               # Lista de exemplo e testes de estresse
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configurações do TypeScript
└── vite.config.ts          # Configurações do Vite, Tailwind e PWA
```

---

## 🚀 Como Usar

### Fluxo de Uso na Aplicação

1. **Copiar a Lista**: No grupo de WhatsApp, copie a lista de passageiros com as confirmações do dia.
2. **Inserir no Tripply**:
   - Abra o Tripply no navegador ou através do PWA instalado.
   - Na página inicial (**Home**), cole a lista no campo de texto e clique no botão de envio.
3. **Explorar os Resultados**:
   - 📊 **Insights**: Veja os totais consolidados, a variação em relação ao último dia e o gráfico histórico.
   - 🌅 **05h**: Visualize a lista limpa da ida e o quadro de pessoas por ponto de embarque.
   - ☀️ **12h**: Visualize a lista dos estudantes que voltam no horário de almoço.
   - 🌆 **17h**: Visualize a lista dos passageiros que voltam no turno vespertino/noturno.
4. **Compartilhar**: Em qualquer uma das telas de lista ou no Panorama, toque no botão do **WhatsApp** para abrir o aplicativo com o texto perfeitamente formatado e pronto para envio.
5. **Menu Lateral**:
   - Toque no menu sanduíche para abrir a barra lateral e gerar rapidamente uma nova lista para o dia seguinte ou reportar inconsistências.

---

### Instalação e Execução Local

#### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou outro gerenciador de pacotes compatível

#### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/rhianpablo11/trip_report.git
   cd trip_report
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:5173` no seu navegador.

4. **Gerar a versão de produção:**
   ```bash
   npm run build
   ```

5. **Visualizar a build de produção:**
   ```bash
   npm run preview
   ```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento com Vite. |
| `npm run build` | Valida a tipagem com `tsc` e compila os arquivos para a pasta `dist`. |
| `npm run preview` | Executa um servidor local simulando o pacote final de produção. |
| `npm run server` | Sobe um servidor estático apontando para a pasta `dist` usando a biblioteca `serve`. |
| `npm run lint` | Executa o ESLint para verificar padrões de código e boas práticas. |

---

## 👤 Autor

Desenvolvido com carinho por **Rhian Pablo**.

- **GitHub**: [@rhianpablo11](https://github.com/rhianpablo11)
- **Instagram**: [@rhianpablo11](https://www.instagram.com/rhianpablo11/)

---

