import { type } from "arktype";

export const loginSchema = type({
	email: type("string.email").configure({
		message: "Please enter a valid email address.",
	}),
	password: type(
		"/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/",
	).configure({
		message: "Please enter a valid password.",
	}),
});

export const registerSchema = type({
	email: type("string.email").configure({
		message: "Please enter a valid email address.",
	}),
	password: type(
		"/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/",
	).configure({
		message: "Please enter a valid password.",
	}),
	firstName: type("string>4").configure({
		message: "Please enter a valid first name.",
	}),
	lastName: type("string>4").configure({
		message: "Please enter a valid last name.",
	}),
});

type LoginType = typeof loginSchema.infer;
type RegisterType = typeof registerSchema.infer;

export type { LoginType, RegisterType };
