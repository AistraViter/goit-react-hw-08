import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import css from "./LoginPage.module.css";

const loginFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};
function LoginPage() {
  const dispatch = useDispatch();
  const id = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

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
