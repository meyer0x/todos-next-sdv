export const initialTodolists = [
	{
		id: 0,
		label: "Home work",
		todos: [
			{
				id: 0,
				label: "Javascript",
				done: false,
			},
			{
				id: 1,
				label: "CSS",
				done: true,
			},
		],
	},
	{
		id: 1,
		label: "FATALITY",
		todos: [...Array(500)].map((_x, index) => ({
			id: index,
			label: `TASK ${index}`,
			done: false,
		})),
	},
];
