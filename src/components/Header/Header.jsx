import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import UserMemu from "../UserMemu/UserMemu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMemu /> : <AuthNav />}
    </header>
  );
}
