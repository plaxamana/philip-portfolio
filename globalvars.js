export const socials = [
  { name: 'github', href: 'https://github.com/plaxamana' },
  { name: 'linkedin', href: 'https://linkedin.com/in/plaxamana' },
  { name: 'twitter', href: 'https://twitter.com/_plaxamana' },
]

export const pages = [
  { to: 'Home', href: '/' },
  { to: 'Portfolio', href: '/portfolio' },
  { to: 'About', href: '/about' },
  { to: 'Blog', href: '/blog' },
  { to: 'Contact Me', href: '/#contact' },
]

export const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}


export function giveStyles(title) {
  switch (title) {
    case 'Express':
      return 'bg-green-900 text-green-200'
    case 'CSS':
      return 'bg-indigo-900 text-indigo-100'
    case 'JavaScript':
      return 'text-yellow-900 bg-yellow-200'
    case 'HTML':
      return 'bg-purple-900 text-purple-100'
    case 'Next':
      return 'bg-blue-900 text-blue-200'
    case 'React':
      return 'bg-blue-200 text-blue-900'
    case 'Node':
      return 'bg-green-200 text-green-900'
    case 'PostgreSQL':
      return 'bg-gray-900 text-gray-100'
    case 'MongoDB':
      return 'bg-white text-green-900 border border-green-900'
    case 'DigitalOcean':
      return 'text-blue-900 bg-white border border-blue-900'
    default:
      return 'bg-gradient-to-r from-blue-700 to-blue-900 text-white'
  }
}