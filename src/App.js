import "./App.css";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
