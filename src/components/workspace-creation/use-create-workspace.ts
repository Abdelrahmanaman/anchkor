import { createForm } from "@tanstack/solid-form";
import { type } from "arktype";
import { createSignal } from "solid-js";
import { organization } from "~/lib/auth-client";
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
			const org = await organization.create({
				name: value.name,
				slug: value.name,
			});

			const orgId = org.data?.id;
			if (!orgId) {
				throw new Error("Organization ID is required");
			}
			const res = await createWorkspace({ data: { data: value, orgId } });
			const { success } = res;
			if (success) {
				createWorkspaceForm.reset();
				setStep(3);
			}
		},
		validators: {
			onMount: workspaceSchema,
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
