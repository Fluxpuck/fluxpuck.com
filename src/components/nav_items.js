export const navigationItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Projects',
    url: '',
    submenu: [
      {
        title: 'Hyper(+)',
        url: '/projects?=hyper-bot'
      },
      {
        title: 'Hyper Dashboard',
        url: '/projects?=hyper-dashboard'
      },
      {
        title: 'Sero',
        url: '/projects?=sero-bot'
      },
      {
        title: 'Chatbot Collection',
        url: '/projects?=discord-bots'
      },
      {
        title: 'S6 Portfolio (NextJS)',
        url: '/projects?=nextjs-app'
      },
      {
        title: 'AI_Denity',
        url: '/projects?=aidentity'
      },
      {
        title: '...',
        url: '/projects'
      }
    ]
  },
  {
    title: 'Contact',
    url: '/contact',
  }
];