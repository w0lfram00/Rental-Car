import { Field, Form, Formik } from "formik";
import s from "./RentForm.module.css";
import clsx from "clsx";

const RentForm = () => {
  const initialValues = { name: "", email: "", date: new Date(), comment: "" };

  return (
    <div className={s.wrapper}>
      <h3>Book your car now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.dir(values);
          alert("order compleat! Wait for as to contact you!");
          actions.resetForm();
        }}
      >
        <Form>
          <Field name="name" placeholder="Name*" required />
          <Field name="email" type="email" placeholder="Email*" required />
          <Field name="date" type="date" />
          <Field name="comment" as="textarea" placeholder="Comment" />
          <button className={clsx(s.button, "button-general")} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RentForm;
