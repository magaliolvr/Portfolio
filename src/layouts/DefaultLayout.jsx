import { Outlet } from "react-router";
import HeaderNav from "../components/HeaderNav.jsx";
import Footer from "../components/Footer.jsx";
import "../style/reset.scss";
import "../style/utils.scss";
import { Link } from "react-router";

function DefaultLayout() {
  return (
    <>
      <HeaderNav title={"mo"}>
        <ul className="menu-list">
          <li>
            <Link to={"./"}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={"./about"}>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to={"./contributions"}>
              <span>Contributions</span>
            </Link>
          </li>
          <li>
            <Link to={"./casestudies"}>
              <span>Case Studies</span>
            </Link>
          </li>
          <li>
            <Link to={"./contacts"}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </HeaderNav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default DefaultLayout;
