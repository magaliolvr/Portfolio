import "./Home.component.scss";
import { useState, useEffect } from "react";
import { Blob } from "../components/Blob";


function Home() {
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
        setDisplay({ display: "block", font: "10vw" });
      } else {
        setDisplay({ display: "block", font: "14vw" })
      };
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return <>
    <Blob />
    <div className="home-brand" style={{ display: text.display, fontSize: text.font }}>
      <span>Mag</span>
      <span>Olvr</span>
    </div>;
  </>



}

export default Home;

