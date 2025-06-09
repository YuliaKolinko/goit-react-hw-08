import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterSlice } from "../../redux/filtersSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);
  const validationSchema = Yup.object({
    search: Yup.string()
      .min(3, "You must enter at least 3 characters")
      .max(50, "You cannot write more than 50 characters"),
  });
  return (
    <div>
      <Formik
        initialValues={{ search: filterValue }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ handleChange }) => (
          <Form className={css.form}>
            <label htmlFor="search" className={css.label}>
              Find contacts by name
            </label>
            <Field
              className={css.input}
              type="text"
              name="search"
              onChange={(event) => {
                handleChange(event);
                dispatch(filterSlice.actions.setFilter(event.target.value));
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
