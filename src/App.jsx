//app은 모든 페이지에서 보여지는 공동 구역
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import ClassPage from './Pages/ClassPage'
import TodoPage from './Pages/TodoPage'
import Footer from './components/Footer'

function App() {

  return (
    <div className='container'>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/class' element={<ClassPage />} />
          <Route path='/todo' element={<TodoPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
