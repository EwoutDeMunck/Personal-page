

interface ChildComponentProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const CustomButton = ({ title,onClick }: ChildComponentProps) => {
  return (
    <button className="justify-center hover:text-gray-900 ease-in-out duration-300 items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:outline-none"
    onClick={onClick}
    >
    {title}
    </button>
  )
}

export default CustomButton