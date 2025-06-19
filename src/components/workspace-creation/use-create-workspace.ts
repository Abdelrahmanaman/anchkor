import { createForm } from "@tanstack/solid-form";
import { type } from "arktype";
import { useZero } from "../zero-app";

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
	const z = useZero();
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
			z().mutate.workspace.create({
				name: value.name,
				domain: value.domain,
				logo: value.logo,
				title: value.title,
				description: value.description,
				workspaceUrl: value.workspaceUrl,
			});
		},
	}));

	return { createWorkspaceForm };
}
