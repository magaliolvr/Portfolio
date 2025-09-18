import React, { useEffect, useState } from "react";
import "./HeaderNav.component.scss";
import useMediaQuery from "../hooks/useMediaQuery";



function HeaderNav({ title, children }) {
  const [fontSizes, setFontSizes] = useState({
    menu: "16px",
    title: "0px",
  });
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setFontSizes({ menu: "12px", title: "35px" });
      } else {
        setFontSizes({ menu: "16px", title: "0px" });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="nav-header">
      <span className="header-title" style={{ fontSize: fontSizes.title }}>
        {title}
      </span>
      <nav>
        {/* Espera-se que children inclua o ul.menu-list */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.props.className && child.props.className.includes("menu-list")) {
            return React.cloneElement(child, {
              style: { fontSize: fontSizes.menu, ...(child.props.style || {}) },
            });
          }
          return child;
        })}
      </nav>
    </header>
  );// no return temos a seguinte configuraçao: o titulo que vem da props title e o children que espera um ul com a class menu-list. o react.children.map itera sobre os filhos e verifica se o filho é um elemento valido e se a className inclui menu-list. se sim, clona o elemento e adiciona o estilo de fontSize dinamico. senao retorna o proprio filho.
}

export default HeaderNav;

