import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Header from "./components/Header.jsx"
import TabBar from "./components/TabBar"

function App() {
  return (
    <div >
      <TabBar/>
      <Header/>
      <Home />
      <About />
    </div>
  );
}

export default App;
