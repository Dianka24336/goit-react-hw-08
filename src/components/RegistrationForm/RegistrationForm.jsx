import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={s.form}>
        <label className={s.formLabel}>
          <span>Name</span>
          <Field
            className={s.formInput}
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </label>
        <label className={s.formLabel}>
          <span>Email</span>
          <Field
            className={s.formInput}
            type="text"
            placeholder="Enter email"
            name="email"
          />
        </label>
        <label className={s.formLabel}>
          <span>Password</span>
          <Field
            className={s.formInput}
            type="password"
            placeholder="Enter password"
            name="password"
          />
        </label>
        <button className={s.button} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
