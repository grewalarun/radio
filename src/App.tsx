import './App.css'
import Navbar from './app/components/navbar/Navbar';
import RenderRoutes from './routes/RenderRoutes';

function App() {
  return (
<>
<Navbar/>

    <div className="container mx-auto max-w-6xl px-4">
 <RenderRoutes/> 
 </div> 

 </>
  )
}

export default App
