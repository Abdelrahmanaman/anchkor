import { createForm } from "@tanstack/solid-form";
import { type } from "arktype";
import { useZero } from "../zero-app";

const workspaceSchema = type({
	domain: type("string.semver").configure({
		message: "Please enter a valid website URL.",
	}),
	name: type("string>3").configure({
		message: "Please enter a valid name.",
	}),
	logo: "string",
	title: "string",
	description: "string",
});

type WorkspaceType = typeof workspaceSchema.infer;

export { workspaceSchema, type WorkspaceType };

export function useCreateWorkspace() {
	const z = useZero();
	const createWorkspaceForm = createForm(() => ({
		defaultValues: {
			domain: "",
			name: "",
			logo: "",
			title: "",
			description: "",
		},
		onSubmit: async ({ value }) => {
			z().mutate.workspace.create({
				name: value.name,
				domain: value.domain,
				logo: value.logo,
				title: value.title,
				description: value.description,
			});
		},
	}));

	return { createWorkspaceForm };
}
