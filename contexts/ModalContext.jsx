import { createContext, useCallback, useState } from "react";

export const ModalContextProvider = props => {
	const { children } = props;
	const [modalOpen, setModalOpen] = useState(null);

	const closeModal = useCallback(() => {
		setModalOpen(null);
	}, []);

	const toggleAddListModal = useCallback(() => {
		setModalOpen("add-list");
	}, []);

	const toggleAddTodoModal = useCallback(() => {
		setModalOpen("add-todo");
	}, []);

	const toggleEditListModal = useCallback(() => {
		setModalOpen("edit-list");
	}, []);

	return (
		<ModalContext.Provider
			value={{
				modalOpen,
				closeModal,
				toggleAddListModal,
				toggleEditListModal,
				toggleAddTodoModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const ModalContext = createContext();
