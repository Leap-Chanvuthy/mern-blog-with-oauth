import Home from './pages/Home';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Header from './components/Header';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';



function App() {

  return (
   <BrowserRouter>
        <Header/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/projects' element={<Projects/>} />
          {/* only authenticated user can see dashboard route */}
          <Route  element={<AuthenticatedRoute/>} >
            <Route  path='/dashboard' element={<Dashboard/>} />
          </Route>
          {/* only authenticated user can see dashboard route */}
          <Route  path='/sign-in' element={<SignIn/>} />
          <Route  path='/sign-up' element={<SignUp/>} />
        </Routes>
        <FooterComponent/>
   </BrowserRouter>
  )
}

export default App
