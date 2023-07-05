import ContactSection from 'components/Sections/ContactSection'
import Header from 'components/Sections/Header'
import mailIcon from 'icons/mail.png'

const Contact = () => {
  return (
    <>
      <Header image={mailIcon} title={'Ewout De Munck'} />
      <ContactSection />
    </>
  )
}

export default Contact
