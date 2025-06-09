import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div className={css.layout}>
      <AppBar />
      {children}
    </div>
  );
}
