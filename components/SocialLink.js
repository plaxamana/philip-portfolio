import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const SocialLink = ({ href, name }) => {
  switch (name) {
    case 'github':
      return (
        <a target='a_blank' href={href} className='hover:text-blue-500'>
          <FiGithub />
        </a>
      )
    case 'linkedin':
      return (
        <a target='a_blank' href={href} className='hover:text-blue-500'>
          <FiLinkedin />
        </a>
      )
    case 'twitter':
      return (
        <a target='a_blank' href={href} className='hover:text-blue-500'>
          <FiTwitter />
        </a>
      )
    case 'instagram':
      return (
        <a target='a_blank' href={href} className='hover:text-blue-500'>
          <FiInstagram />
        </a>
      )
  }
}

export default SocialLink
