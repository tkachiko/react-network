import { useField } from 'formik';

export const Textarea = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <textarea {...field} {...props} />
    </>
  );
};

export default Textarea;
