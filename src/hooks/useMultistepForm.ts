import { ReactElement, useState } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

	const next = () => {
		setCurrentStepIndex(prev => {
			if (prev >= steps.length - 1) return prev;
			return prev + 1;
		});
	};

	const back = () => {
		setCurrentStepIndex(prev => {
			if (prev <= 0) return prev;
			return prev - 1;
		});
	};

	const goTo = (index: number) => setCurrentStepIndex(index - 1);

	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		next,
		back,
		goTo,
		steps,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
	};
};

export default useMultiStepForm;
