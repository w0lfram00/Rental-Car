import { Field, Form, Formik } from "formik";

const RentForm = () => {
  const initialValues = { name: "", email: "", date: new Date(), comment: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(_, actions) => {
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="name" />
        <Field name="email" type="email" />
        <Field name="date" as="date" />
        <Field name="comment" as="textarea" />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default RentForm;
