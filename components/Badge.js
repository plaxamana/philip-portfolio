import { giveStyles } from "globalvars"

const Badge = ({ title }) => {
  let classNames = giveStyles(title)

  return (
    <div
      className={`${classNames} flex items-center justify-center py-1 px-4 rounded-lg text-sm max-w-[100px] mb-2 flex-auto`}
    >
      <p>{title}</p>
    </div>
  )
}

export default Badge
