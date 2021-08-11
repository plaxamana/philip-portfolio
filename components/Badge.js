const Badge = ({ title }) => {
  function getStyles(title) {
    let classNames = ''
    switch (title) {
      case 'Express':
        classNames = 'bg-green-900 text-green-200'
        break
      case 'CSS':
        classNames = 'bg-indigo-900 text-indigo-100'
        break
      case 'JavaScript':
        classNames = 'text-yellow-900 bg-yellow-200'
        break
      case 'HTML':
        classNames = 'bg-purple-900 text-purple-100'
        break
      case 'Next':
        classNames = 'bg-blue-900 text-blue-200'
        break
      case 'React':
        classNames = 'bg-blue-200 text-blue-900'
        break
      case 'Node':
        classNames = 'bg-green-200 text-green-900'
        break
      case 'PostgreSQL':
        classNames = 'bg-gray-900 text-gray-100'
        break
      case 'MongoDB':
        classNames = 'bg-white text-green-900 border border-green-900'
        break
      case 'DigitalOcean':
        classNames = 'text-blue-900 bg-white border border-blue-900'
        break
      default:
        classNames = 'bg-gradient-to-r from-blue-700 to-blue-900 text-white'
        break
    }
    return classNames
  }

  let style = getStyles(title)

  return (
    <div
      className={`${style} flex items-center justify-center py-1 px-4 rounded-lg text-sm max-w-[100px] mb-2 flex-auto`}
    >
      <p>{title}</p>
    </div>
  )
}

export default Badge
