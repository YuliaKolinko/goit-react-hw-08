import css from "./PageTitle.module.ccs";

export default function PageTitle({ children }) {
  return <h1 className={css.pageTitle}>{children}</h1>;
}
