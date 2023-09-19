
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing-options/Pricing'

function App() {


  return (
    <>
<div className='bg-black pb-20 min-h-[100vh]'>
  <div className='max-w-7xl mx-auto'>
  <Navbar></Navbar>
   <Pricing></Pricing>  
  </div>
  </div> 
 

  
    </>
  )
}

export default App
