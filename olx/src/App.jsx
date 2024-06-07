import {  } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Nav from './components/Navbar'
import SecondNav from './components/SecondNav'
import Body from './components/body'
import Footer from './components/footer'
import Footer2 from './components/footer2'
import Footer3 from './components/footer3'
function App() {
  return (
  <div>
   <Nav/>
<SecondNav/>
<Body/>
<Footer/>
<Footer2/>
<Footer3/>
  </div>
 

  );
}
export default App
