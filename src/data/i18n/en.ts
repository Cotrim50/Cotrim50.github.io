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
        video: '/media/video_ergonomia.mp4',
        bullets: [
          'Built Python tools for questionnaire processing and statistical analysis.',
          'Developed a real-time ergonomic posture analysis system in Python using a ZED 2i stereo camera and the ZED SDK body tracking (18-keypoint skeleton, multi-person tracking).',
          'Implemented posture algorithms from 3D keypoints: trunk inclination, lateral flexion and axial rotation, head tilt, arm position (elbow above shoulder) and sitting/standing detection, with configurable thresholds.',
          'Built automatic reporting: session data stored as JSON and converted into PDF reports with sitting/standing statistics and posture charts over time (matplotlib, ReportLab).',
          'Added an OpenCV/OpenGL live viewer with posture overlays and session video recording.',
          'Implemented an anonymization algorithm (pixelation of the detected person) in the ergonomics system to protect workers’ privacy and data.',
          'Developed a program for a Universal Robots UR5 collaborative robot to demonstrate human–robot collaboration in a shared workspace.',
        ],
      },
      {
        role: 'Master Thesis',
        company: 'INEGI',
        period: 'Feb 2024 – Jun 2024',
        image: '/media/thesis-labview.png',
        imageHover: 'Developed HMI',
        title: 'Characterization of a Split Hopkinson Pressure Bar for Measuring the Strength of Adhesive Joints under Tensile/Compression Impact',
        bullets: [
          'Electro-pneumatic system integration: analysed and modified electrical and pneumatic circuits to improve actuator performance, controllability and test repeatability.',
          'Instrumentation & signal acquisition: designed a data acquisition system integrating optical sensors, strain gauges, pressure sensors, signal amplifiers and high-speed measurement hardware.',
          'Industrial software development: developed a LabVIEW application for real-time data acquisition, signal processing, test monitoring, automatic results visualization and CSV/Excel export.',
          'System troubleshooting & optimization: investigated discrepancies between theoretical simulations and experimental results, implementing hardware modifications and evaluating system performance through testing.',
          'Calibration & validation: calibrated the measurement system and validated software outputs against experimental measurements to ensure reliable and consistent results.',
        ],
      },
      {
        role: 'Partnerships Manager',
        company: 'Erasmus Student Network Porto',
        period: 'Sep 2023 – Oct 2025',
        bullets: [
          'Daily use of English for communication with both international students and partners.',
          'Expanded the organization’s partner network, securing 16 commercial and 3 housing partnerships and achieving 47% of the annual funding target in six months.',
        ],
      },
      {
        role: 'Summer Intern – Automation',
        company: 'Pixel Voltaic',
        period: 'Summer 2022',
        bullets: [
          'Programmed PLCs in Ladder, FBD and Structured Text (IEC 61131-3) using CODESYS.',
          'Implemented a serial communication protocol on an Advantech SoftPLC, covering data exchange with external devices.',
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
    badges: { public: 'Public project', private: 'Private project', fork: 'Private / Forked project', academic: 'Academic project' },
    privateNote: 'Limited public details available.',
    items: {
      nzwalks: 'Draft: ASP.NET Core Web API and web front-end for browsing and managing walking trails in New Zealand (regions, difficulties, walks). Built with C#, Entity Framework and SQL Server, using a layered architecture (controllers, repositories, DTOs with AutoMapper) and JWT authentication. Goal: practise building a clean, secure REST API end to end.',
      flip7: 'Draft: Real-time multiplayer web version of the Flip 7 card game, deployed on Vercel. JavaScript front-end with a PostgreSQL (PL/pgSQL) backend that keeps game state and rules in sync between players. Goal: play with friends online and explore real-time multiplayer architecture. Source code is private.',
      addim: 'Draft: Private fork of the Addim website, a TypeScript/SCSS front-end. Used to study and customise an existing production codebase (components, styling, build pipeline). Goal: learn from a real-world project structure and contribute improvements.',
      pickplace: 'Draft: Pick and place system in a simulated environment, using Factory IO connected to a Siemens PLC. Programmed in TIA Portal with Structured Text, with the control sequence designed as a GRAFCET. Goal: validate the automation logic of a pick and place cell in simulation before moving to real hardware.',
    },
  },
  printing: {
    title: '3D Printing',
    text: "My hobby: designing and printing 3D objects. Some I sell, others I keep for myself :D",
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
