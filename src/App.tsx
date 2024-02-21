import './App.css'
import Footer from './components/footer/Footer'
import PostInsider from './pages/Post Insider/PostInsider'
import PostPage from './pages/Post/PostPage'
import CoverPage from './pages/CoverPage/CoverPage'
import CoverPageHeader from './components/Cover-page-Header/CoverPageHeader'
import ProductInsider from './pages/ProductInsider/ProductInsider'
import SustainPage from './pages/SustainPage/SustainPage'
import Events from './pages/Events/Events'
import { Route, Routes, useLocation } from 'react-router-dom'
import { createElement, useEffect, useState } from 'react'
import { Editorial } from './pages/Editorial/Editorial'
import { SmallCoverPageHeader } from './components/Small-Cover-page-Header/SmallCoverPageHeader'
import Drawer from './components/Drawer/Drawer'

function App() {
  
  const [showHeader, setShowHeader] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 1200;

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
        { showHeader == true ? <SmallCoverPageHeader toggleDrawer={toggleDrawer} /> : <CoverPageHeader /> }
        <div className='main-body-container'>
          <Routes >
            <Route path='/' element={createElement(CoverPage, { toggleDrawer })} />
            <Route path='/posts' Component={PostPage} />
            <Route path='/spotlight' Component={SustainPage} />
            <Route path='/events' Component={Events} />
            <Route path='/post-insider' Component={PostInsider} />
            <Route path='/sustainability' Component={SustainPage} />*
            <Route path='/digitalization' element={createElement(CoverPage, { toggleDrawer })} />
            <Route path='/product' Component={ProductInsider} />
            <Route path='/editorial' Component={Editorial} />
          </Routes>
        </div>

    </>
  )
}

export default App
