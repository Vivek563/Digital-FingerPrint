import Home from "./components/Home/Home";
import GeoData from "./components/GeoData/GeoData";
import DeviceDetails from "./components/DeviceDetails/DeviceDetails";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
    <NavBar/>
     <Home/>
     <DeviceDetails/>
     <GeoData/>
     <Footer/>
    </>
  );
}

export default App;
