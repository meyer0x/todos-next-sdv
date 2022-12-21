import { Form, Formik } from "formik";
import { useCallback, useContext } from "react";
import * as yup from "yup";
import { AppContext } from "../../contexts/AppContext";
import Input from "../generic/Input";

const validationSchema = yup.object({
	description: yup.string().min(2),
});

const initialValues = {
	description: "",
};

const AddTodoForm = props => {
	const { toggleModal } = props;
	const { addTodo } = useContext(AppContext);

	const handleSubmit = useCallback(
		values => {
			addTodo(values.description);
			toggleModal();
		},
		[addTodo, toggleModal],
	);
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form id="add-todo">
				<Input name="description" placeholder="Enter a description" />
			</Form>
		</Formik>
	);
};

export default AddTodoForm;
