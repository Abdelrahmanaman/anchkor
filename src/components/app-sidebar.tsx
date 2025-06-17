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
import { Button } from "./ui/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { WorkspaceCreationDialog } from "./workspace-creation/workspace-creation-dialog";

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

const feedbackItems = [
	{
		title: "Boards",
		url: "#",
		icon: <div class="iconify solar--clipboard-linear " />,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader class="bg-background font-semibold ">
				<DropdownMenu sameWidth>
					<DropdownMenuTrigger as={Button<"button">} variant="outline">
						Git Settings
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem as={WorkspaceCreationDialog} />
					</DropdownMenuContent>
				</DropdownMenu>
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
				<SidebarGroup>
					<SidebarGroupLabel>Feedbacks</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<For each={feedbackItems}>
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
