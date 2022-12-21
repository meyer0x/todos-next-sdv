import { Form, Formik } from "formik";
import { useCallback, useContext } from "react";
import * as yup from "yup";
import { AppContext } from "../../contexts/AppContext";
import Input from "../generic/Input";

const validationSchema = yup.object({
	description: yup.string().min(2),
});

const EditListForm = props => {
	const { toggleModal } = props;
	const { editTodolist, todolists, currentList } = useContext(AppContext);

	const initialValues = {
		description: todolists.filter(({ id }) => id === currentList)[0].label,
	};

	const handleSubmit = useCallback(
		values => {
			editTodolist(values.description);
			toggleModal();
		},
		[editTodolist, toggleModal],
	);
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form id="edit-list">
				<Input name="description" placeholder="Enter a description" />
			</Form>
		</Formik>
	);
};

export default EditListForm;
