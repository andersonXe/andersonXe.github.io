export type ProjectStatus = "no ar" | "em desenvolvimento" | "em uso";

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: number;
  status: ProjectStatus;
  problem: string; // what it solves, for whom — one or two sentences
  highlights: string[]; // what makes it different, not how it was built
  live?: string;
  image?: string; // screenshot in public/projects
  imageNote?: string; // caveat shown on the screenshot (e.g. local preview)
  repo?: string; // only public repos — private ones would 404 for visitors
};

const GH = "https://github.com/andersonXe";

export const projects: Project[] = [
  {
    slug: "conformind",
    name: "Conformind",
    category: "SaaS · Gestão da qualidade",
    year: 2026,
    status: "no ar",
    problem:
      "Pequenas indústrias controlam qualidade em planilha e papel: a inspeção acha o defeito, mas ninguém prova que a ação corretiva funcionou. O Conformind leva da inspeção à ação corretiva com a eficácia comprovada pelos dados.",
    highlights: [
      "Inspeção no chão de fábrica, funcionando até sem internet",
      "Amostragem e controle estatístico por conta do sistema, sem planilha",
      "Cada reprovação vira uma não conformidade tratada e um plano de ação — tudo documentado para a auditoria",
      "Mede se a ação resolveu de fato e sugere soluções que já funcionaram no histórico",
    ],
    live: "https://conformind.onrender.com/",
    image: "/projects/conformind.webp",
  },
  {
    slug: "craque-a-craque",
    name: "Craque a Craque",
    category: "Jogo · Futebol",
    year: 2026,
    status: "no ar",
    problem:
      "Um jogo diário para quem gosta de futebol: ligar dois jogadores pelos clubes por onde passaram, no menor caminho possível.",
    highlights: [
      "Desafios novos todo dia, do fácil (vestiram a mesma camisa) ao difícil (jogaram juntos na mesma temporada)",
      "Jogador menos conhecido vale mais pontos — premia quem realmente acompanha futebol",
      "Pensado para aguentar pico de acesso sem cair e sem custo de servidor crescer junto",
    ],
    live: "https://craqueacraque.xyz",
    image: "/projects/craque.webp",
  },
  {
    slug: "escandir",
    name: "Escandir",
    category: "Editor · Poesia",
    year: 2026,
    status: "no ar",
    problem:
      "Escrever em métrica exige contar sílabas poéticas à mão, verso a verso — lento e fácil de errar. O Escandir faz a contagem enquanto o poeta escreve.",
    highlights: [
      "O poeta escolhe a forma antes (soneto, decassílabo…) e vê na hora onde falta ou sobra sílaba",
      "Mostra tônicas e elisões, que é onde a contagem costuma errar",
      "A IA propõe variações, o poeta decide e o sistema confere se a proposta cabe na métrica",
    ],
    live: "https://andersonxe.github.io/escandir/",
    image: "/projects/escandir.webp",
    repo: `${GH}/escandir`,
  },
  {
    slug: "afeto-em-cesta",
    name: "Afeto em Cesta",
    category: "E-commerce · Presentes",
    year: 2026,
    status: "em desenvolvimento",
    problem:
      "Loja de cestas de presente em que o diferencial não é o catálogo: é o cliente montar a cesta do seu jeito e receber no horário certo.",
    highlights: [
      "Montagem de kits com regras que garantem que a combinação faz sentido",
      "Itens personalizados com mensagem e foto",
      "Confere CEP e horários disponíveis antes da compra — não promete entrega que não pode cumprir",
    ],
    image: "/projects/afeto-em-cesta.webp",
    imageNote: "Prévia local · fotos ilustrativas",
  },
  {
    slug: "estimador-salario",
    name: "Estimador de Salário Dev",
    category: "Dados · Calculadora",
    year: 2026,
    status: "no ar",
    problem:
      "Quanto ganha um dev com o seu perfil? A maior pesquisa salarial do país só publica médias por grupo, e somar essas médias infla o resultado. O estimador corrige isso.",
    highlights: [
      "Desconta a sobreposição entre critérios — quem é sênior também tem mais experiência, e isso não pode contar duas vezes",
      "Baseado em 17 mil respostas reais, com a faixa de salários e a precisão da estimativa",
      "Diz com clareza o que os dados não conseguem responder",
    ],
    live: "https://andersonxe.github.io/estimador-salario/",
    image: "/projects/estimador.webp",
    repo: `${GH}/estimador-salario`,
  },
];
