interface ChildComponentProps {
    text: string
    icon?: string
  }

const IconTextPair = ({icon,text}: ChildComponentProps) => {
  return (
    <div className="flex items-center">
    <img src={icon} className='mr-8 h-10 w-10 md:h-16 md:w-16 ' />
     <span>{text}</span>
   </div>
  )
}

export default IconTextPair