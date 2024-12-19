import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleSubmit = (values, options) => {
    dispatch(login(values)).unwrap().then((res)=>{
      toast.success(`Welcome, ${res.user.name}`)
      navigate('/contacts')
    }).catch(()=>{
      toast.error(`Invalid login or password. Try again!`)
    })
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
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
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
