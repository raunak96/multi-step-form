import styles from "@/global.module.css";
import { FormEvent, useState } from "react";
import { AccountForm, AddressForm, UserForm } from "./components";
import useMultiStepForm from "./hooks/useMultistepForm";

const INITIAL_DATA = {
	firstName: "",
	lastName: "",
	age: "",
	street: "",
	city: "",
	state: "",
	zip: "",
	email: "",
	password: "",
};
export type FormData = typeof INITIAL_DATA;

const App = () => {
	const [data, setData] = useState<FormData>(INITIAL_DATA);
	const updateFields = (fields: Partial<FormData>) => {
		setData(prev => ({ ...prev, ...fields }));
	};
	const {
		steps,
		currentStepIndex,
		step,
		isFirstStep,
		isLastStep,
		back,
		next,
		goTo,
	} = useMultiStepForm([
		<UserForm {...data} updateFields={updateFields} />,
		<AddressForm {...data} updateFields={updateFields} />,
		<AccountForm {...data} updateFields={updateFields} />,
	]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!isLastStep) return next();

		alert("Successfully Signed Up");
		setData(INITIAL_DATA);
		goTo(1);
	};

	return (
		<div className={styles.card}>
			<form onSubmit={handleSubmit}>
				<div className={styles.step}>
					{currentStepIndex + 1} / {steps.length}
				</div>
				{step}
				<div className={styles.actions}>
					{!isFirstStep && (
						<button type="button" onClick={back}>
							Back
						</button>
					)}
					<button type="submit">
						{isLastStep ? `Finish` : `Next`}
					</button>
				</div>
			</form>
		</div>
	);
};
export default App;
