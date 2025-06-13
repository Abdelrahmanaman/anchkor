import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "~/components/ui/sidebar";

const items = [
	{
		title: "Dashboard",
		url: "#",
		icon: <div class="iconify tabler--layout-dashboard" />,
	},
	{
		title: "Orders",
		url: "#",
		icon: <div class="iconify solar--reorder-linear " />,
	},
	{
		title: "Inventory",
		url: "#",
		icon: <div class="iconify tabler--building-warehouse " />,
	},
	{
		title: "Stores",
		url: "#",
		icon: <div class="iconify tabler--building-store " />,
	},
	{
		title: "Users",
		url: "#",
		icon: <div class="iconify solar--users-group-two-rounded-linear " />,
	},
	{
		title: "Reports",
		url: "#",
		icon: <div class="iconify tabler--clipboard-data " />,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader class="bg-background font-semibold text-3xl">
				Anchkor
			</SidebarHeader>
			<SidebarContent class="bg-background">
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<For each={items}>
								{(item) => (
									<SidebarMenuItem>
										<SidebarMenuButton as={Link} to={item.url}>
											{item.icon}
											<span>{item.title}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								)}
							</For>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
