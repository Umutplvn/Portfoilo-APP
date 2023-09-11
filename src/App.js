import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Header from "./components/Header.jsx"
import TabBar from "./components/TabBar"
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"; 
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <TabBar/>
      <Header/>
      <Home />
      <About />
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <ToastContainer />

    </div>
  );
}

export default App;
