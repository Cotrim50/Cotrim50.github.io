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
        video: '/media/video_ergonomia.mp4',
        bullets: [
          'Criei ferramentas Python para processamento de questionários e análise estatística.',
          'Desenvolvi um sistema de análise ergonómica de postura em tempo real em Python, com câmara estéreo ZED 2i e body tracking do ZED SDK (esqueleto de 18 pontos, tracking multi-pessoa).',
          'Implementei algoritmos de postura a partir de keypoints 3D: inclinação, flexão lateral e rotação axial do tronco, inclinação da cabeça, posição dos braços (cotovelo acima do ombro) e deteção sentado/em pé, com limiares configuráveis.',
          'Criei relatórios automáticos: dados da sessão guardados em JSON e convertidos em relatórios PDF com estatísticas de sentado/em pé e gráficos de postura ao longo do tempo (matplotlib, ReportLab).',
          'Adicionei um visualizador em tempo real (OpenCV/OpenGL) com indicação de má postura e gravação de vídeo da sessão.',
          'Implementei um algoritmo de anonimização (pixelização da pessoa detetada) no sistema de ergonomia para proteger a privacidade e os dados dos trabalhadores.',
          'Desenvolvi um programa para um robot colaborativo Universal Robots UR5 para demonstrar a colaboração entre humanos e robots no mesmo espaço.',
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
          'Integração de sistemas eletropneumáticos: analisei e modifiquei circuitos elétricos e pneumáticos para melhorar o desempenho dos atuadores, a controlabilidade e a repetibilidade dos ensaios.',
          'Instrumentação e aquisição de sinal: projetei um sistema de aquisição de dados com sensores óticos, extensómetros, sensores de pressão, amplificadores de sinal e hardware de medição de alta velocidade.',
          'Desenvolvimento de software industrial: desenvolvi uma aplicação LabVIEW para aquisição de dados em tempo real, processamento de sinal, monitorização de ensaios, visualização automática de resultados e exportação CSV/Excel.',
          'Diagnóstico e otimização do sistema: investiguei discrepâncias entre simulações teóricas e resultados experimentais, implementando modificações de hardware e avaliando o desempenho através de ensaios.',
          'Calibração e validação: calibrei o sistema de medição e validei os resultados do software face às medições experimentais, garantindo resultados fiáveis e consistentes.',
        ],
      },
      {
        role: 'Gestor de Parcerias',
        company: 'Erasmus Student Network Porto',
        period: 'Set 2023 – Out 2025',
        bullets: [
          'Utilização diária do inglês na comunicação com estudantes internacionais e parceiros.',
          'Expandi a rede de parceiros da organização, garantindo 16 parcerias comerciais e 3 de alojamento e atingindo 47% da meta anual de financiamento em seis meses.',
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
      nzwalks: 'Rascunho: API Web ASP.NET Core e front-end web para consultar e gerir trilhos pedestres da Nova Zelândia (regiões, dificuldades, percursos). Feito com C#, Entity Framework e SQL Server, numa arquitetura em camadas (controllers, repositórios, DTOs com AutoMapper) e autenticação JWT. Objetivo: praticar a construção de uma API REST limpa e segura de ponta a ponta.',
      flip7: 'Rascunho: Versão web multijogador em tempo real do jogo de cartas Flip 7, alojada na Vercel. Front-end em JavaScript com backend PostgreSQL (PL/pgSQL) que mantém o estado e as regras do jogo sincronizados entre jogadores. Objetivo: jogar online com amigos e explorar arquitetura multijogador em tempo real. Código-fonte privado.',
      addim: 'Rascunho: Fork privado do website da Addim, front-end em TypeScript/SCSS. Usado para estudar e personalizar uma base de código real (componentes, estilos, build). Objetivo: aprender com a estrutura de um projeto real e contribuir com melhorias.',
      pickplace: 'Rascunho: Sistema de pick and place em ambiente simulado, com Factory IO ligado a um PLC Siemens. Programado no TIA Portal em Structured Text, com a sequência de controlo desenhada em GRAFCET. Objetivo: validar a lógica de automação de uma célula de pick and place em simulação antes de passar a hardware real.',
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
    phone: 'Telefone',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: { rights: 'Todos os direitos reservados.', built: 'Feito com Astro e Tailwind CSS' },
};
