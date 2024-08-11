import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";

const loginFormSchema = Yup.object().shape({
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
function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  const id = useId();

  return (
    <div className={css.loginFormPage}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginFormSchema}
      >
        <Form className={css.loginForm}>
          <div>
            <label htmlFor={`loginFormEmail${id}`}>Email</label>
            <Field id={`loginFormEmail${id}`} type="email" name="email"></Field>
            <ErrorMessage name="email" component="span" />
          </div>

          <div>
            <label htmlFor={`loginFormPassword${id}`}>Password</label>
            <Field
              id={`loginFormPassword${id}`}
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
export default LoginPage;
