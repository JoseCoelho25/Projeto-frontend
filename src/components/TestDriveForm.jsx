import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15 || Number) {
    errors.firstName = 'Must be 15 characters or less and cant be numbers';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20 || Number) {
    errors.lastName = 'Must be 20 characters or less and cant be numbers';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const TestDriveForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="mt-20 mb-20 xl:max-w-lg w-full">
        <p className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-4">Deixe-nos o seu contacto para marcar um Test-Drive</p>
    <form onSubmit={formik.handleSubmit} >
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        placeholder="Nome"
        className="focus:outline-none border-b w-full my-4  border-sky-400 placeholder-gray-500"
      />
      {formik.errors.firstName ? <div className="text-red-700">{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder="Ultimo Nome"
        className="focus:outline-none border-b w-full my-4  border-sky-400 placeholder-gray-500"
      />
      {formik.errors.lastName ? <div className="text-red-700">{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Email"
        className="focus:outline-none border-b w-full my-4  border-sky-400 placeholder-gray-500"
      />
      {formik.errors.email ? <div className="text-red-700">{formik.errors.email}</div> : null}

      <button type="submit" className=" rounded-full  p-3 w-full xl:w-56   bg-blue-400 text-black text-lg font-semibold mt-4">Submit</button>
    </form>
    </div>
  );
};
export default TestDriveForm;