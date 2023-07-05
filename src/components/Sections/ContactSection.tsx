import Map from 'components/Widgets/Map'
import IconTextPair from '../Widgets/IconTextPair'
import Title from '../Widgets/Title'

import mail from 'icons/mail.png'
import phone from 'icons/phone.png'
import basicMarker from 'icons/basicMarker.png'

const ContactSection = () => {
  return (
    <section className=" relative lg:py-20 bg-gradient-to-r from-gray-300 to-white">
      <div
        className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row "
      >
        <div className="flex flex-col items-center w-full pt-5 md:pr-10 md:pb-20 md:pl-10 lg:pt-20 lg:flex-row">
          <div className="mt-16 lg:mt-0 w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12 mx-8">
            <Map position={[50.9891928, 3.5369066, 19]} />
          </div>
          <div className="w-full my-20 relative flex flex-col items-center z-10 max-w-2xl lg:w-5/12">
            <Title title="Contact Me" />
            <div className="flex flex-col gap-8">
              <IconTextPair icon={phone} text={'+32 476 79 46 05'} />
              <IconTextPair icon={mail} text={'ewoutdemunck@hotmail.com'} />
              <IconTextPair
                icon={basicMarker}
                text={'Ten Bosse 53, 9800 Deinze'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
