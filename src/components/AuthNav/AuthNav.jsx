import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink
        className={(isActive) => (isActive ? css.activeLink : css.link)}
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={(isActive) => (isActive ? css.activeLink : css.link)}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
}
