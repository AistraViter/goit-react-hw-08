import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import css from "./RegisterPage.module.css";

const registerFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",

};
function RegisterPage() { 

  const dispatch = useDispatch();
  const id = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name,
        email: values.email,
        password: values.password, }));
    resetForm();
  };

  return (
    <div className={css.regesterFormPage} > 

    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerFormSchema}
    >
      <Form className={css.regesterForm}>
        <div>
          <label htmlFor={`registerFormName${id}`}>Name</label>
          <Field id={`registerFormName${id}`} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={`registerFormEmail${id}`}>Email</label>
          <Field
            id={`registerFormEmail${id}`}
            type="email"
            name="email"
          ></Field>
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor={`registerFormPassword${id}`}>Password</label>
          <Field
            id={`registerFormPassword${id}`}
            type="password"
            name="password"
          ></Field>
          <ErrorMessage name="password" component="span" />
        </div>


        <button type="submit">Register</button>
      </Form>
    </Formik>
    </div>
  );
}
export default RegisterPage;
