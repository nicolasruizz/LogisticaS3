
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Servicios from './components/Servicios/Servicios';
import Contact from './components/Contact/Contact';
import Conocenos from './components/Conocenos/Conocenos';
import Footer from './Footer/Footer';

function App() {
  return (<>
<NavBar></NavBar>
<Home></Home>
<Servicios></Servicios>
<Contact />
<Conocenos/>
<Footer/>
</>)
}

export default App;
