import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";
import { ThemeToggle } from "./theme-toggle";

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
		<header class="border-b px-4 md:px-6">
			<div class="flex h-16 items-center justify-between gap-4">
				{/* Left side */}
				<div class="flex items-center gap-2">
					{/* Mobile menu trigger */}

					{/* Main nav */}
					<div class="flex items-center gap-6">
						<Link to="/" class="font-extrabold text-2xl">
							Anchkor
						</Link>
						{/* Navigation menu */}
						<For each={navItems}>
							{(item: NavItem) => (
								<Link
									to={item.href}
									class=" btn-ghost"
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

				{/* Right side */}
				<div class="flex items-center gap-2">
					<button type="button" class=" btn-primary">
						<Link to="/">Sign In</Link>
					</button>
					<button type="button" class=" btn-outline">
						<Link to="/">Get Started</Link>
					</button>
				</div>
			</div>
			<ThemeToggle />
		</header>
	);
}
