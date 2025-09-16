import React, { useEffect, useState } from "react";
import "./HeaderNav.component.scss";

function HeaderNav({ title, children }) {
  const [fontSizes, setFontSizes] = useState({
    menu: "16px",
    title: "72px",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setFontSizes({ menu: "12px", title: "35px" });
      } else {
        setFontSizes({ menu: "16px", title: "72px" });
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
  );
}

export default HeaderNav;
