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
		from: "/_layout",
	});

	console.log(loaderData());
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
				// return "eyJhbGciOiJFZERTQSIsImtpZCI6IkNDQkZQY3lsNFZYT3VVRXprNDhaOGU0cGhpc29pOUpYIn0.eyJuYW1lIjoiQWJkZWxyYWhtYW4gQm91cmthIiwiZW1haWwiOiJhYm91cmthQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOmZhbHNlLCJpbWFnZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyNS0wNi0xMVQyMjoxODo1MS45NzFaIiwidXBkYXRlZEF0IjoiMjAyNS0wNi0xMVQyMjoxODo1MS45NzFaIiwiaWQiOiI4NDJxbVRTYWE4NHp4OEo5TWxPQkJiY0RpUzhEZlNJTSIsImlhdCI6MTc1MTExMjYxOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiZXhwIjoxNzUxMTk5MDE5LCJzdWIiOiI4NDJxbVRTYWE4NHp4OEo5TWxPQkJiY0RpUzhEZlNJTSJ9.vpgFIO_P2PZYsKpB5MVIsdIOpmfOkVlqe3MZHlULmBoZbIoHFBJEE2KASNXRMUAfFwmJBNO_7g82qbjk302ABw";
			},
			server: import.meta.env.VITE_PUBLIC_SERVER,
			schema,
			mutators: createMutators({
				authData: loaderData().user.id,
			}),
			logLevel: "info" as const,
		});
	});

	return <Context.Provider value={z}>{props.children}</Context.Provider>;
}

type Mutators = ReturnType<typeof createMutators>;

export function useZero() {
	const z = useContext(Context);
	return z as Accessor<Zero<typeof schema, Mutators>>;
}
