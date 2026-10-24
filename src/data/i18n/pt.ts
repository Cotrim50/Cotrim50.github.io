import type { Dict } from './en';

export const pt: Dict = {
  lang: 'pt',
  htmlLang: 'pt-PT',
  meta: {
    title: 'José Cotrim — Engenheiro de Automação',
    description:
      'Engenheiro de software .NET que liga TI ao chão de fábrica: C#, WPF, SQL Server, visão industrial e integração de PLCs.',
  },
  nav: { about: 'Sobre', experience: 'Experiência', skills: 'Competências', education: 'Formação', certificates: 'Certificados', projects: 'Projetos', contact: 'Contacto', menu: 'Menu', switchLabel: 'English', switchAria: 'Switch to English' },
  hero: {
    greeting: 'Olá, sou o',
    role: 'Engenheiro de Automação',
    tagline: 'Do código de PLC às aplicações .NET: desenvolvo o software que faz funcionar e liga a linha de produção.',
    location: 'Vila do Conde, Porto',
    cv: 'Descarregar CV',
    contact: 'Contactar',
  },
  about: {
    title: 'Sobre',
    text: [
      "Sou engenheiro de software e automação, com mais de 2 anos de experiência em ambiente industrial. Comecei na engenharia mecânica, passei para a automação e hoje trabalho dos dois lados da linha de produção: programo PLCs (Beckhoff TwinCAT, Siemens, CODESYS) e desenvolvo as aplicações .NET, a visão artificial e as bases de dados que ligam as máquinas aos dados, em linhas de produção automóvel.",
      "Fora do trabalho, desenho e imprimo objetos em 3D.",
    ],
  },
  experience: {
    title: 'Experiência',
    items: [
      {
        role: 'Engenheiro de Automação',
        company: 'Preh, Trofa',
        period: 'Nov 2025 – Presente',
        bullets: [
          'Liderei a modernização de aplicações desktop industriais legadas para uma arquitetura web com Angular, ASP.NET Core e Entity Framework Core, mantendo a integração com visão artificial, bases de dados de rastreabilidade e equipamentos de produção.',
          'Desenvolvi aplicações .NET para rastreabilidade de produção e parametrização configurável de linhas de produção, utilizando WPF/MVVM, SQL Server, stored procedures e configurações baseadas em JSON, permitindo atualizar parâmetros de produção sem recompilar ou voltar a instalar o software.',
          'Criei aplicações de visão artificial com MVTec HALCON, .NET WinUI, Entity Framework e SQL Server para inspeção de qualidade automática, com bibliotecas Halcon reutilizáveis em NuGet e executadas como serviços Windows.',
          'Desenvolvi aplicações de automação com Beckhoff TwinCAT 3 e integrei equipamentos industriais através de CAN, Ethernet e MQTT.',
          'Migrei arquiteturas de segurança industrial de ABB Pluto para Beckhoff TwinSAFE, configurando módulos de I/O de segurança e relés de segurança.',
          'Participei no desenvolvimento, comissionamento, validação e suporte de linhas de produção automáticas para o setor automóvel (incluindo Mercedes-Benz), integrando sistemas de visão, PLCs, equipamentos de teste e bases de dados de rastreabilidade.',
        ],
      },
      {
        role: 'Engenheiro de Desenvolvimento de Produto',
        company: 'INEGI',
        period: 'Set 2024 – Out 2025',
        video: '/media/video_ergonomia.mp4',
        bullets: [
          'Desenvolvi um sistema de análise ergonómica de postura em tempo real em Python, com câmara estéreo ZED 2i e body tracking do ZED SDK, avaliando a postura do tronco, cabeça e braços e o estado sentado/em pé a partir de keypoints 3D.',
          'Automatizei relatórios PDF/JSON com estatísticas e gráficos de postura, um visualizador em tempo real com indicação de má postura e um algoritmo de anonimização para proteger a privacidade e os dados dos trabalhadores.',
          'Desenvolvi um programa para um robot colaborativo Universal Robots UR5 para demonstrar a colaboração entre humanos e robots no mesmo espaço.',
          'Criei ferramentas Python para processamento de questionários e análise estatística.',
        ],
      },
      {
        role: 'Gestor de Parcerias',
        company: 'Erasmus Student Network Porto',
        period: 'Set 2024 – Out 2025',
        bullets: [
          'Utilização diária do inglês na comunicação com estudantes internacionais e parceiros.',
          'Expandi a rede de parceiros da organização, garantindo 16 parcerias comerciais e 3 de alojamento e atingindo 47% da meta anual de financiamento em seis meses.',
        ],
      },
      {
        role: 'Tese de Mestrado',
        company: 'INEGI',
        period: 'Fev 2024 – Jun 2024',
        image: '/media/thesis-labview.png',
        imageHover: 'HMI desenvolvida por mim',
        title: 'Characterization of a Split Hopkinson Pressure Bar for Measuring the Strength of Adhesive Joints under Tensile/Compression Impact',
        bullets: [
          'Eletropneumática e instrumentação: modifiquei circuitos elétricos e pneumáticos e projetei um sistema de aquisição de dados (sensores óticos, extensómetros, sensores de pressão, amplificadores, hardware de alta velocidade) para melhorar o desempenho dos atuadores e a repetibilidade dos ensaios.',
          'Desenvolvi uma aplicação LabVIEW para aquisição de dados em tempo real, processamento de sinal, monitorização de ensaios, visualização automática de resultados e exportação CSV/Excel.',
          'Diagnóstico e validação: investiguei discrepâncias entre simulações e resultados experimentais, implementei modificações de hardware e calibrei e validei o sistema e os resultados do software.',
        ],
      },
      {
        role: 'Estágio de Verão – Automação',
        company: 'Pixel Voltaic',
        period: 'Verão 2022',
        bullets: [
          'Programei PLCs em Ladder, FBD e Structured Text (IEC 61131-3) com CODESYS.',
          'Implementei um protocolo de comunicação série num SoftPLC da Advantech, para troca de dados com dispositivos externos.',
        ],
      },
    ],
  },
  skills: {
    title: 'Competências',
    groups: { software: 'Software e Dados', desktop: 'Interfaces Desktop', devops: 'DevOps e Processo', automation: 'Automação e Indústria' },
    languagesTitle: 'Idiomas',
    languages: [
      ['Português', 'Nativo'],
      ['Inglês', 'C1'],
      ['Alemão', 'A2'],
    ],
  },
  education: {
    title: 'Formação',
    items: [
      { degree: 'Mestrado em Engenharia de Automação', school: 'FEUP', year: '2024' },
      { degree: 'Licenciatura em Engenharia Mecânica', school: 'FEUP', year: '2022' },
    ],
  },
  certificates: { title: 'Certificados', view: 'Ver certificado' },
  projects: {
    title: 'Projetos',
    repo: 'Ver repositório',
    live: 'Visitar site',
    badges: { public: 'Projeto público', private: 'Projeto privado', fork: 'Projeto privado / fork', academic: 'Projeto académico' },
    privateNote: 'Detalhes públicos limitados.',
    items: {
      nzwalks: 'API Web ASP.NET Core e front-end web para consultar e gerir trilhos pedestres da Nova Zelândia (regiões, dificuldades, percursos). Feito com C#, Entity Framework e SQL Server, numa arquitetura em camadas (controllers, repositórios, DTOs com AutoMapper) e autenticação JWT. Objetivo: praticar a construção de uma API REST limpa e segura de ponta a ponta.',
      flip7: "Digitalização de um dos meus jogos de cartas favoritos: um jogo web multijogador em tempo real, alojado na Vercel. Front-end em JavaScript com backend PostgreSQL (PL/pgSQL) que mantém o estado e as regras do jogo sincronizados entre jogadores. Código-fonte privado.",
      addim: "Website para uma ONG portuguesa, que decidi desenvolver por iniciativa própria. Front-end em TypeScript/SCSS, publicado em addim.pt.",
      pickplace: 'Sistema de pick and place em ambiente simulado, com Factory IO ligado a um PLC Siemens. Programado no TIA Portal em Structured Text, com a sequência de controlo desenhada em GRAFCET. Objetivo: validar a lógica de automação de uma célula de pick and place em simulação antes de passar a hardware real.',
    },
  },
  printing: {
    title: 'Impressão 3D',
    text: 'O meu hobby: desenhar e imprimir objetos em 3D. Alguns vendo, outros guardo para mim :D',
    alt: 'Objeto impresso em 3D',
    instagram: 'Ver mais no Instagram',
  },
  contact: {
    title: 'Contacto',
    text: 'Aberto a novas oportunidades. Vamos falar.',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: { rights: 'Todos os direitos reservados.', built: 'Feito com Astro e Tailwind CSS' },
};
