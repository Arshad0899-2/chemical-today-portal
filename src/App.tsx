import './App.css'
import Footer from './components/footer/Footer'
import CoverPageHeader from './components/Cover-page-Header/CoverPageHeader'
import PostInsider from './pages/Post Insider/PostInsider'
import PostPage from './pages/Post/PostPage'

function App() {

  return (
    <>
      <CoverPageHeader></CoverPageHeader>
      <PostPage></PostPage>
      <PostInsider></PostInsider>
      <Footer></Footer>
    </>
  )
}

export default App
