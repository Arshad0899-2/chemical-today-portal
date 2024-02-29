import './App.css'
import PostInsider from './pages/PostInsider/PostInsider'
import PostPage from './pages/Post/PostPage'
import CoverPage from './pages/CoverPage/CoverPage'
import CoverPageHeader from './components/Cover-page-Header/CoverPageHeader'
import ProductInsider from './pages/ProductInsider/ProductInsider'
import SustainPage from './pages/SustainPage/SustainPage'
import Editorial from './pages/Editorial/Editorial'
import Events from './pages/Events/Events'
import SectorInsider from './pages/SectorInsider/SectorInsider'
import Spotlight from './pages/Spotlight/Spotlight'
import DigitPage from './pages/DigitPage/DigitPage'
import Equipment from './pages/Equipment/Equipment'
import { Route, Routes, useLocation } from 'react-router-dom'
import { createElement, useEffect, useState } from 'react'
import { Header } from './components/Header/Header'

function App() {
  
  const [showHeader, setShowHeader] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  const location = useLocation();
  const cond1 = location.pathname !== '/';
  const cond2 = windowWidth <= breakpoint;

  const HeaderVisibilityController = () => {
    useEffect(() => {
      if(cond1 || cond2) {
        setShowHeader(true)
      } else {
        setShowHeader(false);
      }
    }, [location]);
    return null;
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
        <HeaderVisibilityController />
        { showHeader == true ? <Header toggleDrawer={toggleDrawer} /> : <CoverPageHeader /> }
        <div className='main-body-container'>
          <Routes >
            <Route path='/' element={createElement(CoverPage)} />
            <Route path='/posts' Component={PostPage} />
            <Route path='/spotlight' Component={Spotlight} />
            <Route path='/events' Component={Events} />
            <Route path='/post-insider' Component={PostInsider} />
            <Route path='/sustainability' Component={SustainPage} />*
            <Route path='/digitalization' Component={DigitPage} />
            <Route path='/product' Component={ProductInsider} />
            <Route path='/editorial' Component={Editorial} />
            <Route path='/sectors' Component={SectorInsider} />
            <Route path='/equipment' Component={Equipment} />
          </Routes>
        </div>

    </>
  )
}

export default App
