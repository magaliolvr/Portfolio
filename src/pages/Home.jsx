import "./Home.component.scss";
import { useState, useEffect } from "react";
import { Blob } from "../components/Blob";
import { useNavigate } from "react-router-dom";
import { useScrollPages } from "../hooks/useScrollPages"



function Home() {
  // useScrollPages({ next: "/about", previous: null });
  const [text, setDisplay] = useState({
    display: "block",
    font: "14vw"

  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setDisplay({ display: "none", font: "5vw" });
      } else if (window.scrollY > 80) {
        setDisplay({ display: "block", font: "5vw" });
      } else if (window.scrollY > 30) {
        setDisplay({ display: "block", font: "8vw" });
      } else {
        setDisplay({ display: "block", font: "10vw" })
      };
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])



  // // / Detect scroll to bottom

  // useEffect(() => {

  //   const handleScroll = () => {

  //     const scrollHeight = document.documentElement.scrollHeight;

  //     const scrollTop = window.scrollY;

  //     const clientHeight = window.innerHeight;



  //     if (scrollTop + clientHeight >= scrollHeight - 50) {

  //       // Reached near bottom

  //       navigate(`/about`);

  //     }

  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);

  // }, [navigate]);




  return <>
    <Blob type="color" color="" />
    <div className="home-brand" style={{ display: text.display, fontSize: text.font }}>
      <span>Mag</span>
      <span>Olvr</span>
    </div>;
  </>



}

export default Home;

