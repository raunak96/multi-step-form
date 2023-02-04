import styles from "@/global.module.css";
import { AccountForm, AddressForm, UserForm } from "./components";
import useMultiStepForm from "./hooks/useMultistepForm";

const App = () => {
	const {
		steps,
		currentStepIndex,
		step,
		isFirstStep,
		isLastStep,
		back,
		next,
	} = useMultiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);

	return (
		<div className={styles.card}>
			<form>
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
					<button type="button" onClick={next}>
						{isLastStep ? `Finish` : `Next`}
					</button>
				</div>
			</form>
		</div>
	);
};
export default App;
