import "./App.css";
import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import Phase1 from "./components/Phase1";
import Products from "./components/Products";
import Tokenomics from "./components/Tokenomics";
import Tools from "./components/Tools";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  new LocomotiveScroll();

  return (
    <div className="App">
      <LandingPage />
      <Hero />
      <Avatar />
      <Tools />
      <Products />
      <Tokenomics />
      <Phase1 />
      <Footer />
    </div>
  );
}

export default App;
