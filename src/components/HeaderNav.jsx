import "./HeaderNav.component.scss";

function HeaderNav({ title, children }) {
  return (
    <>
      <header className="nav-header">
        <span>{title}</span>
        <nav>{children}</nav>
      </header>
    </>
  );
}

export default HeaderNav;
