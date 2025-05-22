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
        onSubmit={(_, actions) => {
          actions.resetForm();
        }}
      >
        <Form>
          <Field name="name" placeholder="Name*" />
          <Field name="email" type="email" placeholder="Email*" />
          <Field name="date" type="date" placeholder="Booking date" />
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
