import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Username
        </label>
        <Field className={css.input} name="name" type="text" />
        <label className={css.label} htmlFor="email">
          Email
        </label>
        <Field className={css.input} name="email" type="email" />
        <label className={css.label} htmlFor="password">
          Password
        </label>
        <Field className={css.input} name="password" type="password" />
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
