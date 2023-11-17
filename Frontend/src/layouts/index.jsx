import Footer from "../components/Footer"
import Header from "../components/Header"

const Layouts = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layouts
