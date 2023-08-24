import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div >
      <header>
        <nav>
          <ul id="nav">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="create-post">CreatePost</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default NavBar;
