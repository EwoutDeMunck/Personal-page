import CancelButton from './CancelButton'
import { useEffect } from 'react'
interface ChildComponentProps {
  image?: string
  imageShape?: any
  title?: string
  introduction?: string
  paragraph?: string[]
  isModalVisible: boolean
  setIsModalVisible: any
}

const Modal = ({
  title,
  image,
  introduction,
  paragraph,
  isModalVisible,
  setIsModalVisible,
  imageShape
}: ChildComponentProps) => {

  const close = (e:KeyboardEvent) => {
    if(e.key === 'Escape' && isModalVisible)
      setIsModalVisible();  
  }

  useEffect(() => {  
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
    };
},[isModalVisible])
  return (
    <>
      {isModalVisible ? (
          <div
            className="z-10 "
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div
              className="fixed top-0 left-0 inset-0 z-10 overflow-y-auto"
              onClick={setIsModalVisible}
            >
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div
                    className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="sm:flex">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                          {title}
                        </h3>
                        <div className="mt-2 flex flex-col">
                          <p className="text-sm text-gray-500">
                            {introduction}
                          </p>
                          <div
                            className={imageShape}
                          >
                            <img
                              className="w-full h-full object-cover"
                              src={image}
                              alt="Image"
                            />
                          </div>
                          {paragraph?.map((line, index) => (
                            <div key={index}>
                              <p  className="text-sm text-left text-gray-500">
                                {line}
                              </p>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CancelButton title="Cancel" onClick={setIsModalVisible} />
                </div>
              </div>
            </div>
          </div>
      ) : null}
    </>
  )
}

export default Modal
