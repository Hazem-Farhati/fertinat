import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import { useEffect, useState } from "react";
import "./styles/load.css";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);
    useEffect(() => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            // console.log(json);
            setData(json);
            setloading(true);

            setTimeout(() => {
              setcompleted(true);
            }, 1000);
          });
      }, 1000);
    }, []);
 useEffect(() => {
   AOS.init({ duration: 1000 });
 }, []);
  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner__container">
              <div className="spinner">
                <img src="/images/logo.jpg" alt="" />

                <div className="half-spinner"></div>
              </div>
            </div>
          ) : (
            <div className="completed__container">
              <div className="completed">
                <img
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                  }}
                  src="/images/logo.jpg"
                  alt=""
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <>
            <Navbar />
            <Routes>
              {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
              <Route path="/" element={<Home />} />

              <Route path="/product" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <ScrollUp />
          </>
        </>
      )}
    </>
  );
}

export default App;
