import React from "react";
import { Field, Formik } from "formik";

const FormikForm = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        // Email validation
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        //  call your DB save the form ...
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 1));
          setSubmitting(false);
        }, 300);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label>Email: </label>
          <Field type="email" name="email" placeholder={"Enter Email"} />
          {errors.email && touched.email && errors.email}
          <br />
          <label>Password: </label>
          <Field
            type="password"
            name="password"
            placeholder={"Enter Password"}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default FormikForm;
