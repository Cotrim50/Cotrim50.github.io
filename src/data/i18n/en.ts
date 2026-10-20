export const en = {
  lang: 'en',
  htmlLang: 'en',
  meta: {
    title: 'José Cotrim — Automation & Software Engineer',
    description:
      '.NET software engineer bridging IT and the factory floor: C#, WPF, SQL Server, machine vision and PLC integration.',
  },
  nav: { about: 'About', experience: 'Experience', skills: 'Skills', education: 'Education', projects: 'Projects', contact: 'Contact', menu: 'Menu', switchLabel: 'Português', switchAria: 'Mudar para Português' },
  hero: {
    greeting: "Hi, I'm",
    role: 'Automation & Software Engineer',
    tagline: 'I build .NET software that connects PLCs, machine vision and databases to the production line.',
    location: 'Vila do Conde, Porto',
    cv: 'Download CV',
    contact: 'Get in touch',
  },
  about: {
    title: 'About',
    text: [
      '.NET Software Engineer with 2+ years of experience building production-grade applications with C#, .NET, WPF, Entity Framework and SQL Server in industrial environments.',
      'Skilled in software integration, Git, Azure DevOps and CI/CD within Agile teams, with a growing interest in Azure and cloud technologies.',
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Automation & Software Engineer',
        company: 'Preh, Trofa',
        period: 'Nov 2025 – Present',
        bullets: [
          'Built .NET/WPF apps for configurable production-line parameterization with JSON + SQL Server, avoiding recompilation for production changes.',
          'Developed manufacturing traceability apps with .NET (MVVM), SQL Server and stored procedures.',
          'Built .NET WinUI machine vision apps with Entity Framework, MVTec Halcon and SQL Server for automated quality inspection.',
          'Designed reusable Halcon vision libraries packaged as NuGet and deployed as Windows services.',
          'Integrated industrial software with Beckhoff TwinCAT 3 PLCs, MQTT, SQL Server and industrial hardware.',
          'Contributed to the migration from ABB Pluto safety controllers to Beckhoff TwinSAFE.',
          'Integrated and validated production stations for Mercedes-Benz lines.',
          'Worked with Azure DevOps, Git, CI/CD and Agile.',
        ],
      },
      {
        role: 'Product Development Engineer',
        company: 'INEGI',
        period: 'Sep 2024 – Oct 2025',
        bullets: [
          'Developed LabVIEW applications for high-speed experimental testing systems.',
          'Built Python tools for questionnaire processing and statistical analysis.',
          'Developed AI-based body tracking using ZED 2i for posture and object detection.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: { software: 'Software & Data', desktop: 'Desktop UI', devops: 'DevOps & Process', automation: 'Automation & Industrial' },
    languagesTitle: 'Languages',
    languages: [
      ['Portuguese', 'Native'],
      ['English', 'C1'],
      ['German', 'A2'],
    ],
  },
  education: {
    title: 'Education',
    items: [
      { degree: 'MSc in Automation Engineering', school: 'FEUP', year: '2024' },
      { degree: 'BSc in Mechanical Engineering', school: 'FEUP', year: '2022' },
    ],
  },
  certificates: { title: 'Certificates', view: 'View certificate' },
  projects: {
    title: 'Projects',
    repo: 'View repository',
    live: 'Visit site',
    badges: { public: 'Public project', private: 'Private project', fork: 'Private / Forked project' },
    privateNote: 'Limited public details available.',
    items: {
      nzwalks: 'Draft: ASP.NET Core Web API and web front-end for browsing and managing walking trails in New Zealand (regions, difficulties, walks). Built with C#, Entity Framework and SQL Server, using a layered architecture (controllers, repositories, DTOs with AutoMapper) and JWT authentication. Goal: practise building a clean, secure REST API end to end.',
      flip7: 'Draft: Real-time multiplayer web version of the Flip 7 card game, deployed on Vercel. JavaScript front-end with a PostgreSQL (PL/pgSQL) backend that keeps game state and rules in sync between players. Goal: play with friends online and explore real-time multiplayer architecture. Source code is private.',
      addim: 'Draft: Private fork of the Addim website, a TypeScript/SCSS front-end. Used to study and customise an existing production codebase (components, styling, build pipeline). Goal: learn from a real-world project structure and contribute improvements.',
    },
  },
  printing: {
    title: '3D Printing',
    text: "My hobby: designing and printing 3D objects.",
    alt: '3D printed object',
    instagram: 'See more on Instagram',
  },
  contact: {
    title: 'Contact',
    text: "Open to new opportunities. Let's talk.",
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: { rights: 'All rights reserved.', built: 'Built with Astro & Tailwind CSS' },
};
export type Dict = typeof en;
