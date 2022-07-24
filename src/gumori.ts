export const site: Config.Site = {
  url: import.meta.env.SITE,
  title: 'Gumori You',
  description: 'Bringing Material Design 3 to the Astro Blog.',
  keywords: ['Gumori', 'Astro', 'UnoCSS'],
  authors: {
    default: {
      name: 'Jane Doe',
      url: import.meta.env.SITE,
      default: true
    }
  },
  lang: 'en'
}

export const page: Config.Page = {
  pageSize: 5
}

export const nav: Config.Nav = [
  {
    text: 'Elements',
    link: '/elements'
  },
  {
    text: 'RSS',
    link: '/rss.xml'
  },
  {
    text: 'Sitemap',
    link: import.meta.env.SITE + 'sitemap-0.xml'
  }
]

export const rss: Config.RSS = {}

export const date: Config.Date = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
}