const config = {
  siteTitle: 'Hi Lovely Dogs',
  siteTitleShort: 'Hi Lovely Dogs',
  siteTitleAlt: 'Hi Lovely Dogs',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://hilovelydogs.com',
  repo: 'https://github.com/toan8051/taniarascia.com',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Tania Rascia is full-stack software developer and open source enthusiast specializing in modern JavaScript development who breaks down complex concepts in an accessible and intuitive way.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  disqusShortname: 'taniarascia',
  postDefaultCategoryID: 'Tech',
  userName: 'Tania',
  userEmail: 'me@taniarascia.com',
  userTwitter: 'taniarascia',
  userLocation: 'Chicago, IL',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I build open source projects and write the missing instruction manuals of the web.',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
