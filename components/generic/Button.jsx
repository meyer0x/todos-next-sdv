import clsx from "clsx";

const base =
	"focus:border-purple-500 border px-4 py-1 font-medium flex flex-row items-center gap-5 justify-center text-lg h-10 rounded-lg";

const variants = {
	primary:
		"bg-blue-700 text-gray-50 hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-200 disabled:text-gray-400",
	secondary:
		"bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 disabled:bg-gray-200 disabled:text-gray-400",
	outlined:
		"bg-transparent border border-gray-900 text-gray-700 hover:bg-gray-200 active:bg-gray-300 disabled:text-gray-400",
	ghost:
		"bg-white text-gray-900 hover:bg-gray-200 active:bg-gray-300 disabled:text-gray-400",
	danger:
		"bg-red-100 border-red-900 text-red-900 hover:bg-red-200 active:bg-red-300  disabled:text-gray-400 disabled:bg-gray-100 disabled:border-gray-400",
	success:
		"bg-green-100 border-green-900 text-green-900 hover:bg-green-200 active:bg-green-300  disabled:text-gray-400 disabled:bg-gray-100 disabled:border-gray-400",
	todo: "bg-white border-b-0 rounded-none rounded-tr-xl rounded-tl-xl border-slate-200 border-2 px-9 py-2 hover:bg-slate-200",
};

const Button = props => {
	const {
		variant = "primary",
		className,
		isLoading = false,
		...buttonProps
	} = props;

	const classNames = clsx(base, variants[variant], className);

	return (
		<button
			{...buttonProps}
			className={classNames}
			{...(isLoading && {
				children: (
					<svg
						className="animate-spin h-5 w-5 text-black"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				),
			})}
		/>
	);
};

export default Button;
