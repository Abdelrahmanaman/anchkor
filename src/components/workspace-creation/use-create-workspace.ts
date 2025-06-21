import { createForm } from "@tanstack/solid-form";
import { type } from "arktype";
import { createSignal } from "solid-js";
import { createWorkspace } from "./workspace-creation-fn";

const workspaceSchema = type({
	domain: type("string").configure({
		message: "Please enter a valid website URL.",
	}),
	name: type("string>3").configure({
		message: "Please enter a valid name.",
	}),
	logo: "string",
	title: "string",
	description: "string",
	workspaceUrl: "string",
});

const email = type({
	email: type("string.email").configure({
		message: "Please enter a valid email.",
	}),
});
type WorkspaceType = typeof workspaceSchema.infer;
type EmailType = typeof email.infer;

export { workspaceSchema, type WorkspaceType, email, type EmailType };

export function useCreateWorkspace() {
	const [step, setStep] = createSignal(1);
	const [prevStep, setPrevStep] = createSignal(1);

	function direction() {
		return step() > prevStep() ? "forward" : "backward";
	}
	const createWorkspaceForm = createForm(() => ({
		defaultValues: {
			domain: "",
			name: "",
			logo: "",
			title: "",
			description: "",
			workspaceUrl: "",
		} as WorkspaceType,
		onSubmit: async ({ value }) => {
			const res = await createWorkspace({ data: { data: value } });
			const { success } = res;
			if (success) {
				setStep(3);
			}
		},
	}));

	return {
		createWorkspaceForm,
		step,
		prevStep,
		setPrevStep,
		setStep,
		direction,
	};
}
