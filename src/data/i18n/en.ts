export const en = {
  lang: 'en',
  htmlLang: 'en',
  meta: {
    title: 'José Cotrim — Automation & Software Engineer',
    description:
      '.NET software engineer bridging IT and the factory floor: C#, WPF, SQL Server, machine vision and PLC integration.',
  },
  nav: { about: 'About', experience: 'Experience', skills: 'Skills', education: 'Education', certificates: 'Certificates', projects: 'Projects', contact: 'Contact', menu: 'Menu', switchLabel: 'Português', switchAria: 'Mudar para Português' },
  hero: {
    greeting: "Hi, I'm",
    role: 'Automation & Software Engineer',
    tagline: 'From PLC code to .NET applications: I build the software that runs and connects the production line.',
    location: 'Vila do Conde, Porto',
    cv: 'Download CV',
    contact: 'Get in touch',
  },
  about: {
    title: 'About',
    text: [
      "I'm a software and automation engineer with 2+ years of experience in industrial environments. I started in mechanical engineering, moved into automation, and today I work on both sides of the production line: programming PLCs (Beckhoff TwinCAT, Siemens, CODESYS) and building the .NET applications, machine vision and databases that tie machines to data, for automotive production lines.",
      "Outside work, I design and print 3D objects.",
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
          'Led the modernization of legacy industrial desktop applications towards a web-based architecture with Angular, ASP.NET Core and Entity Framework Core, keeping integration with machine vision, traceability databases and production equipment.',
           'Took part in the development, commissioning, validation and support of automated automotive production lines (including Mercedes-Benz), integrating vision systems, PLCs, test equipment and traceability databases.',
           'Developed .NET (WPF/MVVM) applications for manufacturing traceability and configurable production-line parameterization with SQL Server, stored procedures and JSON, avoiding recompilation for production changes.',
          'Built machine vision applications with MVTec HALCON, .NET WinUI, Entity Framework and SQL Server for automated quality inspection, with reusable Halcon libraries packaged as NuGet and deployed as Windows services.',
          'Developed Beckhoff TwinCAT 3 automation applications and integrated industrial equipment through CAN, Ethernet and MQTT.',
          'Migrated industrial safety architectures from ABB Pluto to Beckhoff TwinSAFE, configuring safety I/O modules and safety relays.',
        ],
      },
      {
        role: 'Product Development Engineer',
        company: 'INEGI',
        period: 'Sep 2024 – Oct 2025',
        video: '/media/video_ergonomia.mp4',
        bullets: [
          'Developed a real-time ergonomic posture analysis system in Python with a ZED 2i stereo camera and ZED SDK body tracking, assessing trunk, head and arm posture and sitting/standing state from 3D keypoints.',
          'Automated PDF/JSON reporting with posture statistics and charts, a live viewer with posture overlays, and an anonymization algorithm to protect workers’ privacy and data.',
          'Developed a program for a Universal Robots UR5 collaborative robot to demonstrate human–robot collaboration in a shared workspace.',
          'Built Python tools for questionnaire processing and statistical analysis.',
        ],
      },
      {
        role: 'Partnerships Manager',
        company: 'Erasmus Student Network Porto',
        period: 'Sep 2024 – Oct 2025',
        bullets: [
          'Daily use of English for communication with both international students and partners.',
          'Expanded the organization’s partner network, securing 16 commercial and 3 housing partnerships and achieving 47% of the annual funding target in six months.',
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
          'Electro-pneumatic & instrumentation: modified electrical and pneumatic circuits and designed a data acquisition system (optical sensors, strain gauges, pressure sensors, amplifiers, high-speed hardware) to improve actuator performance and test repeatability.',
          'Developed a LabVIEW application for real-time data acquisition, signal processing, test monitoring, automatic results visualization and CSV/Excel export.',
          'Troubleshooting & validation: investigated discrepancies between simulations and experiments, applied hardware modifications, and calibrated and validated the system and software outputs.',
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
      nzwalks: 'ASP.NET Core Web API and web front-end for browsing and managing walking trails in New Zealand (regions, difficulties, walks). Built with C#, Entity Framework and SQL Server, using a layered architecture (controllers, repositories, DTOs with AutoMapper) and JWT authentication. Goal: practise building a clean, secure REST API end to end.',
      flip7: "Digital version of one of my favourite card games: a real-time multiplayer web game, deployed on Vercel. JavaScript front-end with a PostgreSQL (PL/pgSQL) backend that keeps game state and rules in sync between players. Source code is private.",
      addim: "Website for a Portuguese NGO, which I decided to build on my own initiative. TypeScript/SCSS front-end, published at addim.pt.",
      pickplace: 'Pick and place system in a simulated environment, using Factory IO connected to a Siemens PLC. Programmed in TIA Portal with Structured Text, with the control sequence designed as a GRAFCET. Goal: validate the automation logic of a pick and place cell in simulation before moving to real hardware.',
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
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: { rights: 'All rights reserved.', built: 'Built with Astro & Tailwind CSS' },
};
export type Dict = typeof en;
