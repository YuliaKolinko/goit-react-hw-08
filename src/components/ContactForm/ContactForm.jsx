import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "You must enter at least 3 characters")
          .max(50, "You cannot write more than 50 characters")
          .required("This field is required"),
        number: Yup.string()
          .min(3, "You must enter at least 3 characters")
          .max(50, "You cannot write more than 50 characters")
          .required("This field is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          addContacts({
            id: nanoid(),
            name: values.name,
            number: values.number,
          })
        );
        resetForm();
      }}
    >
      <Form>
        <div className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />

          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
