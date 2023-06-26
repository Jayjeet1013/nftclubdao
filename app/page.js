import Image from 'next/image'
import Header from './components/Header'
import Home from './components/Home'
import Community from './components/Community'
import Services from './components/Services'
import Footer from './components/Footer'

export default function page() {
  return (
   <div >
    
    <Header/>
  <Home/>
  <Community/>
  <Services/>
  <Footer/>
   </div>
  )
}
