import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink to="/registration" className={css.link}>
        Registration
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
    </div>
  );
}
