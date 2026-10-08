export type ProjectStatus = "no ar" | "em desenvolvimento" | "em uso";

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: number;
  status: ProjectStatus;
  problem: string; // what it solves and for whom, in one or two sentences
  highlights: string[]; // what makes it different, not how it was built
  live?: string;
  image?: string; // screenshot in public/projects
  imageNote?: string; // caveat shown on the screenshot (e.g. local preview)
  repo?: string; // only public repos; private ones would 404 for visitors
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
      "Pequenas indústrias controlam a qualidade em planilhas e papel. A inspeção encontra o defeito, mas ninguém consegue provar que a ação corretiva funcionou. O Conformind acompanha todo o caminho, da inspeção à ação corretiva, com a eficácia comprovada pelos dados.",
    highlights: [
      "Inspeção no chão de fábrica, funcionando até sem internet",
      "Amostragem e controle estatístico feitos pelo sistema, sem planilhas",
      "Cada reprovação vira uma não conformidade tratada e um plano de ação, tudo documentado para a auditoria",
      "Mede se a ação resolveu de fato e sugere soluções que já funcionaram antes",
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
      "Jogadores menos conhecidos valem mais pontos, o que premia quem realmente acompanha futebol",
      "Feito para aguentar picos de acesso sem cair e sem que o custo do servidor cresça junto",
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
      "Escrever em métrica exige contar as sílabas poéticas à mão, verso a verso, um trabalho lento e fácil de errar. O Escandir faz essa contagem enquanto o poeta escreve.",
    highlights: [
      "O poeta escolhe a forma (soneto, decassílabo e outras) e vê na hora onde falta ou sobra sílaba",
      "Mostra as tônicas e as elisões, justamente onde a contagem costuma falhar",
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
      "Uma loja de cestas de presente em que o diferencial não é o catálogo, e sim o cliente montar a cesta do seu jeito e recebê-la no horário certo.",
    highlights: [
      "Montagem de kits com regras que garantem que a combinação faz sentido",
      "Itens personalizados com mensagem e foto",
      "Confere o CEP e os horários disponíveis antes da compra, para não prometer uma entrega que não pode cumprir",
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
      "Quanto ganha um dev com o seu perfil? A Pesquisa Salarial de Programadores publica apenas médias por grupo, e combinar essas médias infla o resultado. O estimador corrige essa distorção.",
    highlights: [
      "Desconta a sobreposição entre critérios: quem é sênior também tem mais experiência, e isso não pode contar duas vezes",
      "Baseado em mais de 17 mil respostas, mostra a faixa de salários e a precisão da estimativa",
      "Diz com clareza o que os dados não conseguem responder",
    ],
    live: "https://andersonxe.github.io/estimador-salario/",
    image: "/projects/estimador.webp",
    repo: `${GH}/estimador-salario`,
  },
];
