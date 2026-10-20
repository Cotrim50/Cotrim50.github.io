// Language-independent facts. Translatable text lives in ./i18n/*.ts
export const profile = {
  name: 'José Cotrim',
  phone: '+351 960 251 458',
  email: 'cotrim.ze@gmail.com',
  linkedin: 'https://linkedin.com/in/jose-cotrim',
  github: 'https://github.com/Cotrim50',
  cv: '/cv/Jose_Cotrim_CV.pdf',
};

export const skills: Record<string, string[]> = {
  software: ['C#', '.NET', 'REST APIs', 'MVVM', 'Entity Framework', 'SQL Server', 'Python'],
  desktop: ['WPF', 'WinUI', 'WinForms'],
  devops: ['Azure DevOps', 'Git', 'CI/CD', 'Agile', 'NuGet'],
  automation: ['TwinCAT 3', 'Codesys', 'ST / FBD / Ladder', 'Siemens TIA Portal', 'LabVIEW', 'MQTT'],
};

export const projects = [
  {
    id: 'nzwalks',
    repo: 'https://github.com/Cotrim50/NZWalks',
    link: undefined as string | undefined,
    visibility: 'public',
    tags: ['C#', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'flip7',
    repo: undefined as string | undefined,
    link: 'https://flip7-ebon.vercel.app',
    visibility: 'private',
    tags: ['JavaScript', 'PLpgSQL', 'CSS', 'HTML'],
  },
  {
    id: 'addim',
    repo: undefined as string | undefined,
    link: undefined as string | undefined,
    visibility: 'fork',
    tags: ['TypeScript', 'SCSS', 'CSS', 'JavaScript'],
  },
];
