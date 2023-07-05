import Header from 'components/Sections/Header'
import homeIcon from 'icons/home.png'
import AboutSection from 'components/Sections/AboutSection'
import SkillSection from 'components/Sections/SkillSection'
import Projects from 'components/Sections/Projects'

const Home = () => {
  return (
    <>
      <Header image={homeIcon} title={'Ewout De Munck'} />
      <AboutSection />
      <SkillSection />
      <Projects />
    </>
  )
}

export default Home
