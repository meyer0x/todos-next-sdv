import { useContext } from "react";
import AddListForm from "../components/business/AddListForm";
import AddTodoForm from "../components/business/AddTodoForm";
import EditListForm from "../components/business/EditListForm";
import Nav from "../components/business/Nav";
import OptionsBar from "../components/business/OptionsBar";
import TodoListContent from "../components/business/TodolistContent";
import Modal from "../components/generic/Modal";
import { ModalContext } from "../contexts/ModalContext";

const Home = () => {
	const { modalOpen } = useContext(ModalContext);

	return (
		<div className="h-screen flex flex-col overflow-hidden">
			{modalOpen === "add-list" && (
				<Modal
					title="Create a new list"
					submitLabel="Create"
					submitForm="add-list"
				>
					{toggleModal => <AddListForm toggleModal={toggleModal} />}
				</Modal>
			)}
			{modalOpen === "edit-list" && (
				<Modal title="Edit list" submitLabel="Edit" submitForm="edit-list">
					{toggleModal => <EditListForm toggleModal={toggleModal} />}
				</Modal>
			)}
			{modalOpen === "add-todo" && (
				<Modal title="Add a new todo" submitLabel="Add" submitForm="add-todo">
					{toggleModal => <AddTodoForm toggleModal={toggleModal} />}
				</Modal>
			)}
			<Nav />
			<OptionsBar />

			<TodoListContent />
		</div>
	);
};

export default Home;
