import NavigationLink from 'components/Widgets/NavigationLink'
import { useState } from 'react'
import closeIcon from 'icons/close.png'

interface ChildComponentProps {
  image?: string
  title: string
}

const navLinkData = [
  {
    url:"/",
    text:"About"
  },
  {
    url:"/Contact",
    text:"Contact"
  }
]
const Header = ({ image, title }: ChildComponentProps) => {

  const [hamBurgerMenuActive,setHamburgerMenuActive] =useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <img src={image} className="h-8 mr-3" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {title}
          </span>
        </div>
        <button
          onClick={() =>setHamburgerMenuActive(!hamBurgerMenuActive)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!hamBurgerMenuActive ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          ) : (
            <img className="w-6 h-6" src={closeIcon}></img>
          )}
        </button>

        <div
          className={
            hamBurgerMenuActive
              ? 'w-full md:block md:w-auto z-20'
              : 'hidden w-full md:block md:w-auto'
          }
          id="navbar-default"
        >
          <ul className="absolute top-16 right-4 w-2/3 bg-gray-200 md:w-full md:static font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
           {
            navLinkData.map((navlink, index) => {
              return (
               <NavigationLink key={index} url={navlink.url} text={navlink.text}/>
              )
            })
           }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
