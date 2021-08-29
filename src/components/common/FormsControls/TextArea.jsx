import { useField } from "formik";

export const Textarea = ({ ...props }) => {
	const [field] = useField(props);
	return (
		<>
		<div>
		<textarea {...field} {...props} />
		</div>	
		</>
	);
};

export default Textarea;