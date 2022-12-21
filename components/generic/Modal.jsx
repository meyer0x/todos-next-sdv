import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import Button from "/components/generic/Button";
import Text from "/components/generic/Text";

const Modal = props => {
	const { title, submitLabel, children, submitForm } = props;
	const { closeModal } = useContext(ModalContext);

	return (
		<div className="absolute h-screen w-screen z-50 bg-white inset-0">
			<div className="flex flex-row items-center border-b p-6 justify-between">
				<Text as="h1">{title}</Text>
				<Button variant="ghost" onClick={closeModal}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</Button>
			</div>
			<div className="flex-1 p-6">{children(closeModal)}</div>
			<div className="flex flex-row items-center absolute right-8 bottom-8 gap-6">
				<Button variant="ghost" onClick={closeModal}>
					Cancel
				</Button>
				<Button type="submit" form={submitForm}>
					{submitLabel}
				</Button>
			</div>
		</div>
	);
};

export default Modal;
