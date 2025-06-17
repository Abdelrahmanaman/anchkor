import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";
import { buttonVariants } from "../ui/Button";
import MobileNav from "./mobile-nav";

type NavItem = {
	name: string;
	href: string;
};
const navItems: NavItem[] = [
	{ name: "Dashboard", href: "/" },
	{ name: "Orders", href: "/orders" },
	{ name: "Products", href: "/products" },
	{ name: "Customers", href: "/customers" },
];

export default function Header() {
	return (
		<header class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:block ">
			<Link to="/" class="block font-extrabold text-2xl md:hidden">
				Anchkor
			</Link>
			<div class="hidden h-16 items-center justify-between gap-4 md:flex">
				<Link to="/" class="font-extrabold text-2xl ">
					Anchkor
				</Link>
				<div class="flex items-center gap-2">
					<div class="flex items-center gap-6">
						<For each={navItems}>
							{(item: NavItem) => (
								<Link
									to={item.href}
									class={buttonVariants({ variant: "ghost" })}
									activeProps={{
										class: "btn-secondary",
									}}
								>
									{item.name}
								</Link>
							)}
						</For>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<Link to="/login" class={buttonVariants({ variant: "default" })}>
						Login
					</Link>
					<Link to="/register" class={buttonVariants({ variant: "outline" })}>
						Register
					</Link>
				</div>
			</div>
			<div class="md:hidden">
				<MobileNav />
			</div>
			{/* <ThemeToggle /> */}
		</header>
	);
}
