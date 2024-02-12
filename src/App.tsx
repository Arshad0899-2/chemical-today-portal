import './App.css'
import Footer from './components/footer/Footer'
import PostInsider from './pages/Post Insider/PostInsider'
import PostPage from './pages/Post/PostPage'
import Header from './components/Header/Header'
import CoverPage from './pages/CoverPage/CoverPage'

function App() {

  return (
    <>
      <Header></Header>
      <PostPage></PostPage>
      <PostInsider></PostInsider>
      <CoverPage></CoverPage>
      <Footer></Footer>
    </>
  )
}

export default App
