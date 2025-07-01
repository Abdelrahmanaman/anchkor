import { createQuery } from "@rocicorp/zero/solid";
import {
	Link,
	type LinkOptions,
	useParams,
	useRouteContext,
} from "@tanstack/solid-router";
import { type Component, For } from "solid-js";
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
	sidebarMenuButtonVariants,
} from "~/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuGroupLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { WorkspaceCreationDialog } from "./workspace-creation/workspace-creation-dialog";
import { useZero } from "./zero-app";

// Reusable Icon Component
const Icon: Component<{ class: string }> = (props) => (
	<div class={`iconify ${props.class}`} />
);

// Update Items Type
type Items = {
	title: string;
	url: LinkOptions["to"];
	icon: string; // Store class name as string
};

const items: Items[] = [
	{
		title: "Pending",
		url: "/",
		icon: "solar--inbox-archive-bold-duotone bg-yellow-500",
	},
	{
		title: "Reviewing",
		url: "/",
		icon: "solar--card-search-bold-duotone bg-blue-500",
	},
	{
		title: "Planned",
		url: "/",
		icon: "solar--calendar-mark-bold-duotone bg-purple-500",
	},
	{
		title: "Completed",
		url: "/",
		icon: "solar--archive-minimalistic-bold-duotone bg-green-500",
	},
	{
		title: "Closed",
		url: "/",
		icon: "solar--archive-down-minimlistic-bold-duotone bg-gray-500",
	},
];

const feedbackItems: Items[] = [
	{
		title: "Boards",
		url: ".",
		icon: "tabler--circle-dashed",
	},
];

export function AppSidebar() {
	const params = useParams({ from: "/_layout/$workspaceId" });
	const routerContext = useRouteContext({ from: "/_layout/$workspaceId" });
	const z = useZero();
	const [workspace] = createQuery(() =>
		z()
			.query.workspace.whereExists("member", (m) =>
				m.where("userId", "=", z().userID),
			)
			.limit(20),
	);

	return (
		<Sidebar>
			<SidebarHeader class="bg-background font-semibold">
				<DropdownMenu sameWidth>
					<DropdownMenuTrigger class="justify-between px-1.5">
						<div class="flex items-center gap-2">
							<Avatar class="size-8 ">
								<AvatarImage
									src={routerContext().currentWorkspace?.logo || ""}
								/>
								<AvatarFallback class="uppercase">
									{routerContext().currentWorkspace?.name.slice(0, 2)}
								</AvatarFallback>
							</Avatar>
							<span class="truncate font-semibold text-lg first-letter:capitalize">
								{routerContext().currentWorkspace?.name ||
									"No Workspace Selected"}
							</span>
						</div>
						<div class="iconify mynaui--chevron-up-down" aria-hidden />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuGroup>
							<DropdownMenuGroupLabel class="text-muted-foreground text-xs/tight">
								Workspaces
							</DropdownMenuGroupLabel>
							<For each={workspace()}>
								{(item) => (
									<DropdownMenuItem class="relative isolate overflow-clip">
										<Avatar class="size-5">
											<AvatarImage src={item.logo || ""} />
											<AvatarFallback class="uppercase">
												{item.name.slice(0, 2)}
											</AvatarFallback>
										</Avatar>
										<span>{item.name}</span>
										<Link
											class="absolute inset-0 z-20"
											to="/$workspaceId"
											params={{ workspaceId: item.id }}
										/>
									</DropdownMenuItem>
								)}
							</For>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuGroupLabel class="text-muted-foreground text-xs/tight">
								Actions
							</DropdownMenuGroupLabel>
							<DropdownMenuItem as={WorkspaceCreationDialog} />
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarHeader>
			<SidebarContent class="bg-background">
				<SidebarGroup>
					<SidebarGroupLabel>Feedbacks</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<For each={items}>
								{(item) => (
									<SidebarMenuItem>
										<Link
											class={sidebarMenuButtonVariants({
												variant: "default",
												size: "default",
											})}
											to={item.url}
										>
											<Icon class={item.icon} />
											<span>{item.title}</span>
										</Link>
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
											<Icon class={item.icon} />
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
