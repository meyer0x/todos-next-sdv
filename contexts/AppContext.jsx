const { createContext, useState, useCallback } = require("react");
const { initialTodolists } = require("../initialState");

export const AppContextProvider = props => {
	const { children } = props;

	const [currentList, setCurrentList] = useState(0);
	const [isFiltered, setIsFiltered] = useState(0);
	const [todolists, setTodolists] = useState(initialTodolists);

	const deleteList = useCallback(
		todoListId => () => {
			setTodolists(prev => [...prev.filter(({ id }) => id !== todoListId)]);
			if (todoListId === currentList) {
				setCurrentList(null);
			}
		},
		[currentList],
	);

	const addTodolist = useCallback(name => {
		setTodolists(prev => [
			...prev,
			{
				id:
					prev.reduce((prev, next) => (next.id > prev ? next.id : prev), 0) + 1,
				label: name,
				todos: [],
			},
		]);
	}, []);

	const editTodolist = useCallback(
		name => {
			setTodolists(prev => [
				...prev.map(todolist => {
					if (todolist.id === currentList) {
						return { ...todolist, label: name };
					}
					return todolist;
				}),
			]);
		},
		[currentList],
	);

	const updateStatusTodo = useCallback(
		todolistId => todoId => {
			setTodolists(prev => [
				...prev.filter(({ id }) => id !== todolistId),
				{
					...prev.filter(({ id }) => id === todolistId)[0],
					todos: [
						...prev
							.filter(({ id }) => id === todolistId)[0]
							.todos.map(todo => {
								if (todo.id === todoId) {
									return { ...todo, done: !todo.done };
								}
								return todo;
							}),
					],
				},
			]);
		},
		[],
	);

	const addTodo = useCallback(
		name => {
			setTodolists(prev => [
				...prev.map(todolist => {
					if (todolist.id === currentList) {
						return {
							...todolist,
							todos: [
								...todolist.todos,
								{
									id:
										todolist.todos.reduce(
											(prev, next) => (next.id > prev ? next.id : prev),
											0,
										) + 1,
									done: false,
									label: name,
								},
							],
						};
					}
					return todolist;
				}),
			]);
		},
		[currentList],
	);

	const deleteTodo = useCallback(
		todolistId => todoId => {
			setTodolists(prev => [
				...prev.filter(({ id }) => id !== todolistId),
				{
					...prev.filter(({ id }) => id === todolistId)[0],

					todos: [
						...prev
							.filter(({ id }) => id === todolistId)[0]
							.todos.filter(({ id }) => id !== todoId),
					],
				},
			]);
		},
		[],
	);

	const toggleFiltered = useCallback(() => {
		setIsFiltered(x => !x);
	}, [setIsFiltered]);

	return (
		<AppContext.Provider
			value={{
				todolists,
				currentList,
				isFiltered,
				toggleFiltered,
				deleteList,
				addTodolist,
				editTodolist,
				deleteTodo,
				addTodo,
				updateStatusTodo,
				setCurrentList,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const AppContext = createContext();
