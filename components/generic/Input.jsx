import clsx from "clsx";
import { Field } from "formik";
import React from "react";
import Text from "./Text";

const Input = props => {
	const { hasError, errorText, className, ...inputProps } = props;

	const currentClassNames = clsx(
		"outline-none rounded border border-gray-300 px-3 py-2 placeholder:text-gray-400 text-gray-900 hover:border-gray-500 focus:border-gray-700 disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-500 transition-all ease-in duration-75 w-full",
		className,
		{
			"border-red-700": hasError,
		},
	);

	const parseName = name => name.at(0).toUpperCase() + name.slice(1);

	return (
		<div className="flex flex-col gap-1">
			<label>{parseName(inputProps.name) || "Input"}</label>
			<div className="relative">
				<Field className={currentClassNames} {...inputProps} />
			</div>
			<Text
				variant={{
					color: "danger",
					type: "lightParagraph",
					align: "left",
				}}
				as="label"
			>
				{hasError ? errorText || "" : ""}
			</Text>
		</div>
	);
};

export default Input;
