const Badge = ({ title, classNames }) => {
  return (
    <div
      className={`${classNames} flex items-center justify-center py-1 px-4 rounded-lg text-sm max-w-[100px]`}
    >
      <p>{title}</p>
    </div>
  )
}

export default Badge;