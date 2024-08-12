import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LogInPage.module.css";

const logInFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};
function LogInPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  const id = useId();

  return (
    <div className={css.logInFormPage}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={logInFormSchema}
      >
        <Form className={css.logInForm}>
          <div>
            <label htmlFor={`logInFormEmail${id}`}>Email</label>
            <Field id={`logInFormEmail${id}`} type="email" name="email"></Field>
            <ErrorMessage name="email" component="span" />
          </div>

          <div>
            <label htmlFor={`logInFormPassword${id}`}>Password</label>
            <Field
              id={`logInFormPassword${id}`}
              type="password"
              name="password"
            ></Field>
            <ErrorMessage name="password" component="span" />
          </div>

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
}
export default LogInPage;
