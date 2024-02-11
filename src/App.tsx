import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import PostInsider from './pages/Post Insider/PostInsider'
import PostPage from './pages/Post/PostPage'

function App() {

  return (
    <>
      <Header></Header>
      <PostPage></PostPage>
      <PostInsider></PostInsider>
      <Footer></Footer>
    </>
  )
}

export default App
