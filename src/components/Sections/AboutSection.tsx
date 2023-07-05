import { useState } from 'react'
import Modal from '../Widgets/Modal'
import image from 'images/pasfoto.png'
import CustomButton from 'components/Widgets/CustomButton'
import {ShapeEnum} from 'styles/ImageStyles'
import { TitleStyles } from 'styles/TitleStyles'


const title = 'Nice to meet you'
const introduction =
  'Hello, I am Ewout De Munck, a junior software developer based out of Deinze, Belgium.'
const paragraph =
[
  ' In 2021, I started my journey to learn software development, immersing myself in programming languages, web development, and software engineering principles. Through continuous learning and hands-on projects, I built a strong foundation and embraced the collaborative nature of the development community, preparing myself for an exciting career ahead.'
]
const AboutSection = () => {
  const [isModalVisible, setIsModelVisible] = useState(false)

  return (
    <section className="bg-center bg-no-repeat bg-gradient-to-r bg-gradient-to-r from-gray-500 to-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className={TitleStyles.LIGHT}>
          Hi, I'm Ewout
        </h1>
        <p className="mb-8 text-2xl font-normal text-gray-300  sm:px-16 lg:px-48">
         Software Developer
        </p>
        <CustomButton
          title={'About me'}
          onClick={() => setIsModelVisible(!isModalVisible)}
        />
        <Modal
          title={title}
          image={image}
          introduction={introduction}
          paragraph={paragraph}
          imageShape={ShapeEnum.ROUND}
          isModalVisible={isModalVisible}
          setIsModalVisible={() => setIsModelVisible(!isModalVisible)}
        />
      </div>
    </section>
  )
}
export default AboutSection
