import { NavLink } from 'react-router-dom'
interface ChildComponentProps {
    url: string;
    text:string;
  }
const NavigationLink = ({url,text}:ChildComponentProps) => {
  return (
    <NavLink
    to={url}
    className={({ isActive, isPending }) =>
      isPending
        ? 'pending'
        : isActive
        ? 'block py-2 pl-3 pr-4 text-xl text-white bg-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
        : 'block py-2 pl-3 pr-4 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
    }
  >
    {text}
  </NavLink>
  )
}

export default NavigationLink