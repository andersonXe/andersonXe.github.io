export type ProjectStatus = "no ar" | "em desenvolvimento" | "em uso";

export type ProjectImage = {
  src: string; // screenshot in public/projects (16:10 WebP, ~1600px wide)
  alt: string; // what the screen shows
  note?: string; // caveat shown under it (e.g. illustration, local preview)
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: number;
  status: ProjectStatus;
  problem: string; // what it solves and for whom, in one or two sentences
  highlights: string[]; // what makes it different, not how it was built
  live?: string;
  images: ProjectImage[]; // carousel; the first one is the cover
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
    images: [
      { src: "/projects/conformind.webp", alt: "Página inicial" },
      { src: "/projects/conformind-cpk.webp", alt: "Calculadora de Cp e Cpk" },
      { src: "/projects/conformind-amostragem.webp", alt: "Calculadora de amostragem NBR 5426" },
    ],
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
    images: [
      { src: "/projects/craque.webp", alt: "Desafios do dia" },
      { src: "/projects/craque-jogo.webp", alt: "Partida em andamento, ligando dois jogadores por um clube" },
    ],
  },
  {
    slug: "karaoke",
    name: "Karaokê",
    category: "App web · Festas",
    year: 2026,
    status: "no ar",
    problem:
      "Um karaokê para reunir os amigos: a TV vira o palco e cada convidado participa pelo próprio celular, sem instalar nada.",
    highlights: [
      "Cada palco abre uma sala; os convidados entram pelo QR code, pedem músicas, acompanham a fila e votam em quem cantou",
      "O celular de quem canta vira o microfone e mede a afinação nota a nota",
      "Outras telas, na mesma casa ou à distância, tocam a música em sincronia, e a voz de quem canta chega até elas",
      "Toca vídeos do YouTube e músicas com letra sincronizada, inclusive as geradas pelo wave2karaoke",
    ],
    live: "https://karaoke-cqt9.onrender.com/",
    images: [
      { src: "/projects/karaoke.webp", alt: "Pedido de música no palco" },
      { src: "/projects/karaoke-palco.webp", alt: "Palco com o QR code para os convidados entrarem" },
    ],
  },
  {
    slug: "wave2karaoke",
    name: "wave2karaoke",
    category: "Ferramenta · Áudio",
    year: 2026,
    status: "em desenvolvimento",
    problem:
      "Para cantar com pontuação, o karaokê precisa de um arquivo com a letra sincronizada e a nota de cada sílaba, e montar isso à mão é um trabalho lento. O wave2karaoke gera tudo a partir de uma gravação: letra, notas, instrumental e voz-guia.",
    highlights: [
      "Separa a voz do instrumental, transcreve a letra e encontra a nota de cada sílaba",
      "Testado em 16 músicas brasileiras: o cantor original tiraria em média 88% de nota com as notas geradas, contra 55% com as da ferramenta de base",
      "Leva a letra da gravação original para vídeos de karaokê, mesmo quando estão em outro tom ou andamento",
      "O arquivo gerado serve para o Karaokê e para qualquer jogo compatível com UltraStar",
    ],
    images: [{ src: "/projects/wave2karaoke.webp", alt: "Da gravação ao arquivo de karaokê", note: "Ilustração" }],
  },
  {
    slug: "repertorio",
    name: "Repertório",
    category: "App · Música",
    year: 2026,
    status: "em desenvolvimento",
    problem:
      "Bandas organizam ensaios e shows entre grupos de mensagem, planilhas e pastas de cifras. O Repertório junta agenda, repertórios, músicas e conversa da banda num app só, para web, Android e iPhone.",
    highlights: [
      "Repertórios em blocos, com o tempo total do show calculado, intervalos incluídos",
      "Cifras que mudam de tom na hora e um modo palco com letra grande e a próxima música sempre à vista",
      "Cada evento tem presença confirmada, repertório e chat; músicos convidados veem só aquele show",
      "Dá para baixar o repertório antes e tocar no palco sem internet",
    ],
    images: [
      { src: "/projects/repertorio-agenda.webp", alt: "Agenda da banda" },
      { src: "/projects/repertorio-repertorio.webp", alt: "Repertório de um show em blocos" },
      { src: "/projects/repertorio-palco.webp", alt: "Modo palco" },
    ],
  },
  {
    slug: "pianopedals",
    name: "pianoPedals",
    category: "Áudio · Instrumentos",
    year: 2026,
    status: "em desenvolvimento",
    problem:
      "Os pedais do piano mudam como as notas soam, e violão e guitarra não têm nada parecido. O pianoPedals leva o sustain, o sostenuto e o una corda para outros instrumentos, com cordas virtuais que respondem ao som do próprio instrumento.",
    highlights: [
      "Os três pedais do piano, com meio-pedal contínuo em vez de liga e desliga",
      "Uma rede neural reconhece quais notas estão soando, para o sostenuto segurar só essas; por enquanto, testada em violão sintético",
      "Processa o áudio mais de 200 vezes mais rápido que o tempo real no PC, pensando em rodar depois dentro de um pedal",
    ],
    images: [
      {
        src: "/projects/pianopedals.webp",
        alt: "Espectrograma sem e com o pedal",
        note: "Espectrograma gerado pelo próprio projeto",
      },
    ],
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
    images: [
      { src: "/projects/escandir.webp", alt: "Soneto escandido no tema claro" },
      { src: "/projects/escandir-escuro.webp", alt: "O mesmo poema no tema escuro" },
    ],
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
    images: [{ src: "/projects/afeto-em-cesta.webp", alt: "Loja", note: "Prévia local · fotos ilustrativas" }],
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
    images: [
      { src: "/projects/estimador.webp", alt: "Estimativa sem filtros" },
      { src: "/projects/estimador-perfil.webp", alt: "Estimativa para um perfil preenchido" },
      { src: "/projects/estimador-detalhes.webp", alt: "Como a estimativa foi calculada" },
    ],
    repo: `${GH}/estimador-salario`,
  },
];
