import clsx from "clsx";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import Button from "../generic/Button";

const Nav = props => {
	const { todolists, currentList, setCurrentList } = useContext(AppContext);

	const { toggleAddListModal } = useContext(ModalContext);

	const getPercentage = todos => {
		return (todos.filter(({ done }) => done).length / todos.length) * 100;
	};

	return (
		<nav className="flex flex-row items-center overflow-x-scroll">
			{todolists.map(todolist => (
				<div className="flex flex-col" key={todolist.id}>
					<Button
						variant="todo"
						className={clsx("whitespace-nowrap -ml-2", {
							"z-20": currentList === todolist.id,
						})}
						onClick={() => setCurrentList(todolist.id)}
					>
						{todolist.label}
						<div className="flex flex-row">
							<span className="bg-green-400 px-2 rounded -mr-2 z-20">
								{todolist.todos.filter(({ done }) => done).length}
							</span>
							<span className="bg-blue-400 pl-4 pr-2 rounded">
								{todolist.todos.length}
							</span>
						</div>
					</Button>
					<div class="w-full bg-gray-200 border h-1.5">
						<div
							class="bg-green-400 h-1.5 z-20 transition-all duration-300 ease-linear"
							style={{ width: `${getPercentage(todolist.todos) || 0}% ` }}
						></div>
					</div>
				</div>
			))}
			<Button className="ml-10" variant="todo" onClick={toggleAddListModal}>
				+
			</Button>
		</nav>
	);
};

export default Nav;
