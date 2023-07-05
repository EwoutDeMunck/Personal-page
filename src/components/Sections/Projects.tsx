import Modal from 'components/Widgets/Modal'
import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import monitorApp from 'images/monitorApp.jpg'
import CustomButton from 'components/Widgets/CustomButton'
import projectWerk from 'images/projectwerk.png'
import bestmix from 'images/bestmix.png'
import {ShapeEnum} from 'styles/ImageStyles'
import { TitleStyles } from 'styles/TitleStyles'

const projectsData = [
  {
    id: 104,
    title: 'Internship',
    introduction: 'I completed my intership at BESTMIX software in the spring of 2022',
    image: bestmix,
    paragraph: [
      'During my internship, I learned to work with a large-scale, international application and handle complex abstractions within the framework. This sharpened my ability to translate user needs into practical solutions and taught me how to collaborate effectively with a team to meet deadlines.',
      'I learned how to use databinding to establish dynamic connections between data sources and visual elements.'
    ],
    visible: false
  },
  {
    id: 102,
    title: 'Assigment app',
    introduction: 'This project was completed in the autumn of 2022.',
    image: projectWerk,
    paragraph: [
      
    ],
    visible: false
  },
  {
    id: 100,
    title: 'Temperature dashboard',
    introduction: 'This project was completed during the summer of 2022.',
    image: monitorApp,
    paragraph: [
      'To handle the backend functionalities and facilitate communication between the frontend and Azure IoT Hub, I utilized Azure Functions, a SQL-Server Db and an ASP.NET Core API. Azure Functions provided a serverless compute environment that allowed me to run small pieces of code in response to events.',
      'Initially, I implemented a long polling mechanism to establish a real-time connection between the dashboard and the backend.',
      'To improve the efficiency and responsiveness of the dashboard, I decided to switch from using long polling to SignalR, a library that leverages websockets to provide real-time communication between the client and the server, enabling instant updates without the need for continuous polling.'
    ],
    visible: false
  },
  {
    id: 101,
    title: 'Attendance & parking app',
    introduction: 'This project was completed in the autumn of 2022.',
    image: projectWerk,
    paragraph: [
      "This desktop application is a team-developed app using WPF and ADO.NET. It tracks and manages people's presence in a building and manages a parkinglot.",
      'During the development of the app, I learned about pagination and indexes to improve performance when handling large amounts of attendee data.'
    ],
    visible: false
  },
  
  {
    id: 103,
    title: 'Restaurant Data Service',
    introduction: 'This project was completed in the autumn of 2022.',
    image: projectWerk,
    paragraph: [
      
    ],
    visible: false
  },
  
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1140 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1140, min: 900 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)
  
  const toggleVisibility = (id: number) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, visible: !project.visible } : project
      )
    )
  }
  return (
    <section className="bg-center bg-no-repeat bg-gradient-to-r from-gray-500 to-gray-700 bg-blend-multiply">

      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-34">
      <h2 className={TitleStyles.LIGHT}>Some of my work</h2>
      <p className="mb-8 text-2xl font-normal text-gray-300  sm:px-16 lg:px-48">
         
        </p>
        {projects.map((project) => (
          <Modal
            key={project.id}
            title={project.title}
            introduction={project.introduction}
            paragraph={project.paragraph}
            image={project.image}
            imageShape={project.id === 100 ? ShapeEnum.SMALL : ShapeEnum.SQUARE}
            setIsModalVisible={() => toggleVisibility(project.id)}
            isModalVisible={project.visible}
          />
        ))}
        <div className="relative pb-8 mt-16">
          <Carousel
            responsive={responsive}
            swipeable={true}
            showDots={true}
            renderDotsOutside={true}
            removeArrowOnDeviceType={["mobile"]}
            keyBoardControl={true}
            
          >
            {projects.map((project) => (
              <CustomButton
                key={project.id}
                title={project.title}
                onClick={() => toggleVisibility(project.id)}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Projects
