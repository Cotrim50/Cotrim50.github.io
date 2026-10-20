import type { Dict } from './en';

export const pt: Dict = {
  lang: 'pt',
  htmlLang: 'pt-PT',
  meta: {
    title: 'José Cotrim — Engenheiro de Automação e Software',
    description:
      'Engenheiro de software .NET que liga TI ao chão de fábrica: C#, WPF, SQL Server, visão industrial e integração de PLCs.',
  },
  nav: { about: 'Sobre', experience: 'Experiência', skills: 'Competências', education: 'Formação', projects: 'Projetos', contact: 'Contacto', menu: 'Menu', switchLabel: 'English', switchAria: 'Switch to English' },
  hero: {
    greeting: 'Olá, sou o',
    role: 'Engenheiro de Automação e Software',
    tagline: 'Desenvolvo software .NET que liga PLCs, visão industrial e bases de dados à linha de produção.',
    location: 'Vila do Conde, Porto',
    cv: 'Descarregar CV',
    contact: 'Contactar',
  },
  about: {
    title: 'Sobre',
    text: [
      'Engenheiro de Software .NET com mais de 2 anos de experiência no desenvolvimento de aplicações de nível produtivo com C#, .NET, WPF, Entity Framework e SQL Server em ambiente industrial.',
      'Competente em integração de software, Git, Azure DevOps e CI/CD em equipas Agile, com interesse crescente em Azure e tecnologias cloud.',
    ],
  },
  experience: {
    title: 'Experiência',
    items: [
      {
        role: 'Engenheiro de Automação e Software',
        company: 'Preh, Trofa',
        period: 'Nov 2025 – Presente',
        bullets: [
          'Desenvolvi aplicações .NET/WPF para parametrização configurável de linhas de produção com JSON + SQL Server, evitando recompilação em alterações de produção.',
          'Desenvolvi aplicações de rastreabilidade de fabrico com .NET (MVVM), SQL Server e stored procedures.',
          'Desenvolvi aplicações .NET WinUI de visão artificial com Entity Framework, MVTec Halcon e SQL Server para inspeção automática de qualidade.',
          'Concebi bibliotecas Halcon reutilizáveis, empacotadas em NuGet e instaladas como serviços Windows.',
          'Integrei software industrial com PLCs Beckhoff TwinCAT 3, MQTT, SQL Server e hardware industrial.',
          'Contribuí para a migração de controladores de segurança ABB Pluto para Beckhoff TwinSAFE.',
          'Integrei e validei estações de produção para linhas Mercedes-Benz.',
          'Trabalho com Azure DevOps, Git, CI/CD e Agile.',
        ],
      },
      {
        role: 'Engenheiro de Desenvolvimento de Produto',
        company: 'INEGI',
        period: 'Set 2024 – Out 2025',
        bullets: [
          'Desenvolvi aplicações LabVIEW para sistemas de ensaio experimental de alta velocidade.',
          'Criei ferramentas Python para processamento de questionários e análise estatística.',
          'Desenvolvi tracking corporal com IA usando ZED 2i para deteção de postura e objetos.',
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
  projects: {
    title: 'Projetos',
    repo: 'Ver repositório',
    live: 'Visitar site',
    badges: { public: 'Projeto público', private: 'Projeto privado', fork: 'Projeto privado / fork' },
    privateNote: 'Detalhes públicos limitados.',
    items: {
      nzwalks: 'Rascunho: API Web ASP.NET Core e front-end web para consultar e gerir trilhos pedestres da Nova Zelândia (regiões, dificuldades, percursos). Feito com C#, Entity Framework e SQL Server, numa arquitetura em camadas (controllers, repositórios, DTOs com AutoMapper) e autenticação JWT. Objetivo: praticar a construção de uma API REST limpa e segura de ponta a ponta.',
      flip7: 'Rascunho: Versão web multijogador em tempo real do jogo de cartas Flip 7, alojada na Vercel. Front-end em JavaScript com backend PostgreSQL (PL/pgSQL) que mantém o estado e as regras do jogo sincronizados entre jogadores. Objetivo: jogar online com amigos e explorar arquitetura multijogador em tempo real. Código-fonte privado.',
      addim: 'Rascunho: Fork privado do website da Addim, front-end em TypeScript/SCSS. Usado para estudar e personalizar uma base de código real (componentes, estilos, build). Objetivo: aprender com a estrutura de um projeto real e contribuir com melhorias.',
    },
  },
  printing: {
    title: 'Impressão 3D',
    text: 'O meu hobby: desenhar e imprimir objetos em 3D.',
    alt: 'Objeto impresso em 3D',
    instagram: 'Ver mais no Instagram',
  },
  contact: {
    title: 'Contacto',
    text: 'Aberto a novas oportunidades. Vamos falar.',
    email: 'Email',
    phone: 'Telefone',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: { rights: 'Todos os direitos reservados.', built: 'Feito com Astro e Tailwind CSS' },
};
