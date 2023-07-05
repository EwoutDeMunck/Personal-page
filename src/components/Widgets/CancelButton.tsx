interface ChildComponentProps {
  onClick: any
  title:any
}
const CancelButton = ({ title,onClick }: ChildComponentProps) => {
  return (
    <div className="px-4 py-3 flex sm:flex-row-reverse sm:px-6">
      <button
        className="bg-red-300 hover:bg-red-700 ease-in-out duration-300 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default CancelButton
