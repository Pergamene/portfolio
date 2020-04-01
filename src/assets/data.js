export const data = {
  nav: [
    {
      id: 1,
      path: '/bio',
      name: 'Austin Glenn',
      last: false,
    },
    {
      id: 2,
      path: '/current-projects',
      name: 'Current Projects',
      last: false,
    },
    {
      id: 3,
      path: '/previous-projects',
      name: 'Previous Projects',
      last: true,
    },
  ],
  landing: {
    path: '/',
    title: 'Full Stack Web Developer',
    bio: 'I’m a developer with a focus on web technologies.  I am detail-oriented in my approach and prioritize organized, clean, readable code.  I excel in planning and creating the logic of a program.  I’ve spent years teaching programming concepts to kids and can explain complex subjects in ways that are easy to understand.  I am constantly seeking ways to increase my understanding and to find ways to improve personally, as well as ways that can improve the products I am working on.',
  },
  bio: {
    name: 'Austin Glenn',
    missionStatement: "Software Engineer and Instructor with an interest in changing the software developer's educational experience.",
    skills: 'React, Redux, HTML, CSS, JavaScript, TypeScript, Golang, Java',
    phone: '801-668-3608',
    email: 'austinkglenn@gmail.com',
    githublink: 'github.com/Pergamene',
    linkedinLink: 'linkedin.com/in/austinkglenn',
  },
  currentProjects: [
    // {
    //   name: 'Spiderweb',
    //   date: 'Current',
    //   stack: 'React, TypeScript, HTML, CSS, Golang, MySQL',
    //   repo: '',
    //   description: 'A site to manage the complex structure and relationships between aspects of worldbuilding and story writing.',
    // },
    {
      id: 0,
      name: 'Instructional Docs',
      date: 'Current',
      stack: 'Markdown',
      repo: 'https://github.com/Devo-Tower/instruction',
      description: 'Instructional documents for helping new programmers learn web technologies and concepts.'
    }
  ],
  previousProjects: [
    {
      id: 0,
      name: 'Portfolio',
      date: '2020',
      stack: 'React, HTML, CSS',
      repo: 'https://github.com/Pergamene/portfolio',
      description: 'This site designed to showcase my work and skills.',
    },
    {
      id: 1,
      name: 'Markdown Partitioner',
      date: '2019',
      stack: 'JavaScript',
      repo: 'https://github.com/Pergamene/sp-markdown-partitioner',
      description: 'A program to convert between user-inputted markdown, to a formated JSON used to display formatted HTML.',
    },
    {
      id: 2,
      name: 'Evermore Cipher',
      date: '2019',
      stack: 'JavaScript',
      link: 'https://www.shardrealms.com/evermore/cipher/',
      repo: 'https://github.com/rhyeen/shardrealms_site/tree/better-decode',
      description: 'A project to decipher encoded messages around the Evermore Park in Pleasant Grove UT',
      bullets: [
        'Created the logic for choosing how to decode the message', 
        'Created the logic that creates all possible decoded messages', 
        'Created the logic that suggests which decoded message is most likely correct',
      ],
    },
    {
      id: 3,
      name: 'Traveling Knight',
      date: '2020',
      stack: 'TypeScript, React, HTML, CSS',
      link: 'https://pergamene.github.io/traveling-knight/',
      repo: 'https://github.com/Pergamene/traveling-knight',
      description: 'The primary purpose of this project was to learn TypeScript, and to try making a game with React',
    },
  ],
};
