
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contactus from './pages/Contactus'
import { Toaster } from "sonner";
import Footer from './pages/Footer'


function App() {
  

  return (
    <>
    <section id='home'>
      <Home/>
    </section>
    <section id='about'>
      <About/>
    </section>
    <section id='projects'>
      <Projects/>
      <Toaster position="top-center" richColors />
    </section>
    <section id='contact'>
      <Contactus/>
    </section>  
    <section id='footer'>
      <Footer/>
    </section>
      
    </>
  )
}

export default App
