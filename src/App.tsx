import './App.css'
import Footer from './components/footer/Footer'
import PostInsider from './pages/Post Insider/PostInsider'
import PostPage from './pages/Post/PostPage'
import Header from './components/Header/Header'
import CoverPage from './pages/CoverPage/CoverPage'
import CoverPageHeader from './components/Cover-page-Header/CoverPageHeader'
import CaseInsider from './pages/CaseInsider/CaseInsider'
import CasePage from './pages/CasePage/CasePage'
import DigitalInsider from './pages/DigitalInsider/DigitalInsider'
import ProductInsider from './pages/ProductInsider/ProductInsider'
import RandDInsider from './pages/RandDInsider/RandDInsider'
import RandDPage from './pages/RandDPage/RandDPage'
import ReportInsider from './pages/ReportInsider/ReportInsider'
import ReportPage from './pages/ReportPage/ReportPage'
import SectorInsider from './pages/SectorInsider/SectorInsider'
import SectorPage from './pages/SectorPage/SectorPage'
import Sustain1Page from './pages/Sustain1Page/Sustain1Page'
import SustainInsider from './pages/SustainInsider/SustainInsider'
import SustainPage from './pages/SustainPage/SustainPage'
import WhiteInsider from './pages/WhiteInsider/WhiteInsider'
import WhitePage from './pages/WhitePage/WhitePage'
import Events from './pages/Events/Events'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { createElement, useEffect, useState } from 'react'
import { Editorial } from './pages/Editorial/Editorial'
import Drawer from './components/Drawer/Drawer'

function App() {

  const [showHeader, setShowHeader] = useState(true);

  const HeaderVisibilityController = () => {
    const location = useLocation();
    useEffect(() => {
      setShowHeader(location.pathname !== '/');
    }, [location]);
    return null;
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <BrowserRouter>
        <HeaderVisibilityController />

        {showHeader && <Header />}
        <CoverPage toggleDrawer={toggleDrawer} />
        {true && <Drawer />}

        <Routes>
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

        <Footer></Footer>

      </BrowserRouter>

    </>
  )
}

export default App

{/* <SectorPage></SectorPage>
<PostPage></PostPage>
<WhitePage></WhitePage>
<ReportPage></ReportPage>
<RandDPage></RandDPage>
<SustainPage></SustainPage>
<Sustain1Page></Sustain1Page>  */}