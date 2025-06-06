import AuthDialog from "~/components/auth/auth-dialog";
import {} from "~/components/ui/dialog";

export const Route = createFileRoute({
	component: Home,
});

function Home() {
	return (
		<div class=" min-h-dvh p-2">
			<h3 class="pos-relative text-8xl ">Welcome Home!!!</h3>
			<button type="button" class=" btn-outline ">
				<div class="i-solar:dialog-2-bold-duotone " />
				click me
			</button>
			<AuthDialog />
		</div>
	);
}
