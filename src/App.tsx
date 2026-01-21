import './App.css'
import Navbar from './app/components/navbar/Navbar';
import RenderRoutes from './routes/RenderRoutes';
import { setTheme, getTheme } from './app/features/theme.ts';
import { useAppSelector } from './app/hooks/storeHooks.ts';
import BottomPlayer from './app/components/BottomPlayer.tsx';


function App() {
  setTheme(getTheme());

  const current = useAppSelector(state=>state.current);
  return (
<div className=' min-h-screen flex bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300'>
<Navbar/>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

 <RenderRoutes/> 
 
       {/* Fixed Player */}
      <BottomPlayer station={current.value} />
</main>
</div>
  )
}

export default App
