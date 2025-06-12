import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div>
      <h2 className={css.pageTitle}>Register your account</h2>
      <RegisterForm />
    </div>
  );
}
