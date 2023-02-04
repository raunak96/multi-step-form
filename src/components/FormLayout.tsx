import { FC, ReactNode } from "react";
import styles from "@/global.module.css";

type Props = {
	children: ReactNode;
	title: string;
};

const FormLayout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<h2 className={styles.formHeading}>{title}</h2>
			<div className={styles.formContainer}>{children}</div>
		</>
	);
};
export default FormLayout;
