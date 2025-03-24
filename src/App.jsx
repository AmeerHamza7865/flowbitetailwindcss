
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Video from './components/Video'

function App() {

  return (
    <>
    <Navbar />
    <Header/>
    {/* <Video/> */}
    


    <div >
    <h1 className=" text-4xl font-bold text-center text-blue-600 my-8  decoration-2 decoration-blue-500">
          List of Cards
        </h1>
      <div className='container mx-auto px-4 py-8 gap-2 flex flex-wrap justify-center'>
    <Card/>
    <Card/>
    <Card/>

      </div>


    </div>

    <div className='container mx-auto px-4 py-8'>
      <Gallery/>
    </div>


    <div className='container mx-auto px-4 py-8'>

      <Slider/>

      </div>

    <div>
      <Footer/>
    </div>



    </>
  )
}

export default App
