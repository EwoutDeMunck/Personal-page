interface ChildComponentProps {
  title: string
  onClick: any
  checked: any
}
const uncheckedClasses =
  'w-11 h-6 bg-gray-200 rounded-full peer after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:transition-all after:border-gray-300 after:border after:w-5 after:rounded-full'
const checkedClasses =
  "peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] peer-checked:bg-gray-700 w-11 h-6 bg-gray-200 rounded-full peer after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:transition-all after:border-gray-300 after:border after:w-5 after:rounded-full"

const FilterButton = ({
  title,
  onClick,
  checked
}: ChildComponentProps) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        checked={checked}
        className="sr-only peer"
        onChange={onClick}
      />
      <div className={checked ? checkedClasses : uncheckedClasses}></div>
      <span className="ml-3 text-sm font-medium text-gray-900">{title}</span>
    </label>
  )
}

export default FilterButton
