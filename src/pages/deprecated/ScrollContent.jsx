// src/layouts/ScrollLayout.jsx
import React, { useRef } from "react";
import "../pages/ScrollContent.component.scss"
import Home from "../Home";
import About from "../About";
import CaseStudies from "../CaseStudies";
import Contributions from "../Contributions";
import Contacts from "../Contacts";

export default function ScrollLayout() {
    const sectionsRef = useRef([]);

    const scrollToPage = (index) => {
        sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="scroll-container">
            <section ref={(el) => (sectionsRef.current[0] = el)}>
                <Home />
            </section>
            <section ref={(el) => (sectionsRef.current[1] = el)}>
                <About />
            </section>
            <section ref={(el) => (sectionsRef.current[2] = el)}>
                <CaseStudies />
            </section>
            <section ref={(el) => (sectionsRef.current[3] = el)}>
                <Contributions />
            </section>
            <section ref={(el) => (sectionsRef.current[4] = el)}>
                <Contacts />
            </section>
        </div>
    );
}
