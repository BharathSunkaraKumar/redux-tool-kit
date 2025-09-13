import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Counter from './pages/Counter'
import TodoList from './pages/TodoList'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App