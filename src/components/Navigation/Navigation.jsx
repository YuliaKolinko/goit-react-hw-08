import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? css.activeLink : css.link;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getNavLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
