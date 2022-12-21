import { Form, Formik } from "formik";
import { useCallback, useContext } from "react";
import * as yup from "yup";
import { AppContext } from "../../contexts/AppContext";
import Input from "../generic/Input";

const validationSchema = yup.object({
	description: yup.string().min(2),
});

const EditTodoForm = props => {
	const { toggleModal } = props;
	const { editTodo, todolists, currentList, currentTodo } =
		useContext(AppContext);

	const initialValues = {
		description: todolists
			.filter(({ id }) => id === currentList)[0]
			.todos.filter(todo => todo.id === currentTodo).label,
	};

	const handleSubmit = useCallback(
		values => {
			editTodo(values.description);
			toggleModal();
		},
		[editTodo, toggleModal],
	);
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form id="edit-todo">
				<Input name="description" placeholder="Enter a description" />
			</Form>
		</Formik>
	);
};

export default EditTodoForm;
