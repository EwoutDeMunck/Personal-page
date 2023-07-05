import { LazyLoadImage } from 'react-lazy-load-image-component';


interface ChildComponentProps {
  title: string
  paragraph?: string
  image?: string
  url?: string
}
const handleClick = (url?:string) => {
    url ?  window.open(url, "_blank"):null;
  };
const BasicCard = ({ title, paragraph, image, url }: ChildComponentProps) => {
  return (
    
    <div className="p-4 lg:w-1/4 md:w-1/3 w-2/3 shadow-2xl rounded-lg border border-gray-500 ">
      <div className="px-4 py-6 flex flex-col items-center" >
        <LazyLoadImage className="w-24 h-24 object-cover mb-8 cursor-pointer" src={image} alt="Icon" onClick={() => handleClick(url)}/>
        <h2 className="title-font font-medium text-3xl text-gray-900 mb-4">
          {title}
        </h2>
        <p className="leading-relaxed">{paragraph}</p>
      </div>
    </div>
  )
}

export default BasicCard
