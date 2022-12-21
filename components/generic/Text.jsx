import clsx from "clsx";
import React from "react";

const variants = {
	title: "text-3xl lg:text-5xl font-bold",
	subtitle: "text-xl lg:text-2xl font-semibold",
	paragraph: "text-base",
	lightParagraph: "text-sm font-light",
};

const Text = props => {
	const {
		variant = "title",
		as: Component = "h1",
		className,
		children,
	} = props;

	const classNames = clsx(variants[variant], className);

	return <Component className={classNames}>{children}</Component>;
};

export default Text;
