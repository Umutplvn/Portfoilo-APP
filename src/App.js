import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Header from "./components/Header.jsx"

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <About />
    </div>
  );
}

export default App;
