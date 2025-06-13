import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
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

export default function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger>
				<span class="sr-only">Menu</span>
				<div class="i-solar:hamburger-menu-outline " />
			</SheetTrigger>
			<SheetContent class="h-full space-y-4">
				<div class="h-full space-y-4 ">
					<For each={navItems}>
						{(item: NavItem) => (
							<Link to={item.href} class="btn-link w-full">
								{item.name}
							</Link>
						)}
					</For>
					<div class="flex flex-col items-center gap-2">
						<button type="button" class=" btn-primary w-full">
							<Link to="/">Sign In</Link>
						</button>
						<button type="button" class=" btn-outline w-full">
							<Link to="/">Get Started</Link>
						</button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
