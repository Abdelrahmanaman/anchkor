import type { Zero } from "@rocicorp/zero";
import { createZero } from "@rocicorp/zero/solid";
import { useLoaderData } from "@tanstack/solid-router";
import { schema } from "schema";
import { createMemo } from "solid-js";
import {
	type Accessor,
	type ParentProps,
	createContext,
	useContext,
} from "solid-js";
import { createMutators } from "zero/mutators";

const Context = createContext();

export default function ZeroContext(props: ParentProps) {
	const loaderData = useLoaderData({
		from: "/app/_layout",
	});
	const z = createMemo(() => {
		return createZero({
			userID: loaderData().user.id,
			auth: async (error) => {
				// if (error === "invalid-token") {
				// 	const { data, error } = await token();
				// 	if (error) {
				// 		throw redirect({
				// 			to: "/login",
				// 		});
				// 	}
				// 	return data.token;
				// }

				return loaderData().jwt;
			},
			server: import.meta.env.VITE_PUBLIC_SERVER,
			schema,
			kvStore: "idb",
			mutators: createMutators({ authData: loaderData().user.id }),
		});
	});

	return <Context.Provider value={z}>{props.children}</Context.Provider>;
}

type Mutators = ReturnType<typeof createMutators>;

export function useZero() {
	const z = useContext(Context);
	return z as Accessor<Zero<typeof schema, Mutators>>;
}
