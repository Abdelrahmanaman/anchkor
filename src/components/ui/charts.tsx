import type { Component, ComponentProps } from "solid-js";
import {
	For,
	Show,
	createEffect,
	createSignal,
	mergeProps,
	on,
	onCleanup,
	onMount,
	splitProps,
} from "solid-js";
import { unwrap } from "solid-js/store";

import type { Ref } from "@solid-primitives/refs";
import { mergeRefs } from "@solid-primitives/refs";
import type {
	ChartComponent,
	ChartData,
	ChartItem,
	ChartOptions,
	Plugin as ChartPlugin,
	ChartType,
	ChartTypeRegistry,
	TooltipModel,
} from "chart.js";
import {
	ArcElement,
	BarController,
	BarElement,
	BubbleController,
	CategoryScale,
	Chart,
	Colors,
	DoughnutController,
	Filler,
	Legend,
	LineController,
	LineElement,
	LinearScale,
	PieController,
	PointElement,
	PolarAreaController,
	RadarController,
	RadialLinearScale,
	ScatterController,
	Tooltip,
} from "chart.js";
import type { JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { cn } from "~/utils/cn";

type TypedChartProps = {
	data: ChartData;
	options?: ChartOptions;
	plugins?: ChartPlugin[];
	ref?: Ref<HTMLCanvasElement | null>;
	width?: number | undefined;
	height?: number | undefined;
};

type ChartProps = TypedChartProps & {
	type: ChartType;
};

type ChartContext = {
	chart: Chart;
	tooltip: TooltipModel<keyof ChartTypeRegistry>;
};

const BaseChart: Component<ChartProps> = (rawProps) => {
	const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement | null>();
	const [chart, setChart] = createSignal<Chart>();

	const props = mergeProps(
		{
			width: 512,
			height: 512,
			options: { responsive: true } as ChartOptions,
			plugins: [] as ChartPlugin[],
		},
		rawProps,
	);

	const init = () => {
		const ctx = canvasRef()?.getContext("2d") as ChartItem;
		const config = unwrap(props);
		const chart = new Chart(ctx, {
			type: config.type,
			data: config.data,
			options: config.options,
			plugins: config.plugins,
		});
		setChart(chart);
	};

	onMount(() => init());

	createEffect(
		on(
			() => props.data,
			() => {
				const currentChart = chart();
				if (currentChart) {
					currentChart.data = props.data;
					currentChart.update();
				}
			},
			{ defer: true },
		),
	);

	createEffect(
		on(
			() => props.options,
			() => {
				const currentChart = chart();
				if (currentChart) {
					currentChart.options = props.options;
					currentChart.update();
				}
			},
			{ defer: true },
		),
	);

	createEffect(
		on(
			[() => props.width, () => props.height],
			() => {
				const currentChart = chart();
				if (currentChart) {
					currentChart.resize(props.width, props.height);
				}
			},
			{ defer: true },
		),
	);

	createEffect(
		on(
			() => props.type,
			() => {
				const dimensions = [chart()?.width, chart()?.height];
				chart()?.destroy();
				init();
				chart()?.resize(...dimensions);
			},
			{ defer: true },
		),
	);

	onCleanup(() => {
		chart()?.destroy();
		mergeRefs(props.ref, null);
	});

	Chart.register(Colors, Filler, Legend, Tooltip);
	return (
		<canvas
			ref={mergeRefs(props.ref, (el) => setCanvasRef(el))}
			height={props.height}
			width={props.width}
		/>
	);
};

function showTooltip(context: ChartContext) {
	let el = document.getElementById("chartjs-tooltip");
	if (!el) {
		el = document.createElement("div");
		el.id = "chartjs-tooltip";
		document.body.appendChild(el);
	}

	const model = context.tooltip;
	if (model.opacity === 0 || !model.body) {
		el.style.opacity = "0";
		return;
	}

	el.className = `p-2 bg-card text-card-foreground rounded-lg border shadow-sm text-sm ${
		model.yAlign ?? "no-transform"
	}`;

	let content = "";

	for (const title of model.title) {
		content += `<h3 class="font-semibold leading-none tracking-tight">${title}</h3>`;
	}

	content += `<div class="mt-1 text-muted-foreground">`;
	const body = model.body.flatMap((body) => body.lines);
	body.forEach((line, i) => {
		const colors = model.labelColors[i];
		content += `
        <div class="flex items-center">
          <span class="inline-block h-2 w-2 mr-1 rounded-full border" style="background: ${colors.backgroundColor}; border-color: ${colors.borderColor}"></span>
          ${line}
        </div>`;
	});
	content += "</div>";

	el.innerHTML = content;

	const pos = context.chart.canvas.getBoundingClientRect();
	el.style.opacity = "1";
	el.style.position = "absolute";
	el.style.left = `${pos.left + window.scrollX + model.caretX}px`;
	el.style.top = `${pos.top + window.scrollY + model.caretY}px`;
	el.style.pointerEvents = "none";
}

function createTypedChart(
	type: ChartType,
	components: ChartComponent[],
): Component<TypedChartProps> {
	const chartsWithScales: ChartType[] = ["bar", "line", "scatter"];
	const chartsWithLegends: ChartType[] = ["bar", "line"];

	const options: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: chartsWithScales.includes(type)
			? {
					x: {
						border: { display: false },
						grid: { display: false },
					},
					y: {
						border: {
							dash: [3],
							dashOffset: 3,
							display: false,
						},
						grid: {
							color: "hsla(240, 3.8%, 46.1%, 0.4)",
						},
					},
				}
			: {},
		plugins: {
			legend: chartsWithLegends.includes(type)
				? {
						display: true,
						align: "end",
						labels: {
							usePointStyle: true,
							boxWidth: 6,
							boxHeight: 6,
							color: "hsl(240, 3.8%, 46.1%)",
							font: { size: 14 },
						},
					}
				: { display: false },
			tooltip: {
				enabled: false,
				external: (context) => showTooltip(context),
			},
		},
	};

	Chart.register(...components);
	return (props) => <BaseChart type={type} options={options} {...props} />;
}

const BarChart = /* #__PURE__ */ createTypedChart("bar", [
	BarController,
	BarElement,
	CategoryScale,
	LinearScale,
]);
const BubbleChart = /* #__PURE__ */ createTypedChart("bubble", [
	BubbleController,
	PointElement,
	LinearScale,
]);
const DonutChart = /* #__PURE__ */ createTypedChart("doughnut", [
	DoughnutController,
	ArcElement,
]);
const LineChart = /* #__PURE__ */ createTypedChart("line", [
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
]);
const PieChart = /* #__PURE__ */ createTypedChart("pie", [
	PieController,
	ArcElement,
]);
const PolarAreaChart = /* #__PURE__ */ createTypedChart("polarArea", [
	PolarAreaController,
	ArcElement,
	RadialLinearScale,
]);
const RadarChart = /* #__PURE__ */ createTypedChart("radar", [
	RadarController,
	LineElement,
	PointElement,
	RadialLinearScale,
]);
const ScatterChart = /* #__PURE__ */ createTypedChart("scatter", [
	ScatterController,
	PointElement,
	LinearScale,
]);

type Bar<T> = T & {
	value: number;
	name: JSX.Element;
	icon?: (props: ComponentProps<"svg">) => JSX.Element;
	href?: string;
	target?: string;
};

type SortOrder = "ascending" | "descending" | "none";

type ValueFormatter = (value: number) => string;

const defaultValueFormatter: ValueFormatter = (value: number) =>
	value.toString();

type BarListProps<T> = ComponentProps<"div"> & {
	data: Bar<T>[];
	valueFormatter?: ValueFormatter;
	sortOrder?: SortOrder;
};

const BarList = <T,>(rawProps: BarListProps<T>) => {
	const props = mergeProps(
		{
			valueFormatter: defaultValueFormatter,
			sortOrder: "descending" as SortOrder,
		},
		rawProps,
	);
	const [local, others] = splitProps(props, [
		"class",
		"data",
		"valueFormatter",
		"sortOrder",
	]);

	const sortedData = () => {
		if (local.sortOrder === "none") {
			return local.data;
		}
		return local.data.sort((a, b) =>
			local.sortOrder === "ascending" ? a.value - b.value : b.value - a.value,
		);
	};

	const widths = () => {
		const maxValue = Math.max(...sortedData().map((item) => item.value), 0);
		return sortedData().map((item) =>
			item.value === 0 ? 0 : Math.max((item.value / maxValue) * 100, 2),
		);
	};

	return (
		<div
			class={cn("flex flex-col space-y-1.5", local.class)}
			aria-sort={local.sortOrder}
			{...others}
		>
			<For each={sortedData()}>
				{(bar, idx) => {
					return (
						<div class="row flex w-full justify-between space-x-6">
							<div class="grow">
								<div
									class={cn(
										"flex h-8 items-center rounded-md bg-secondary px-2",
									)}
									style={{
										width: `${widths()[idx()]}%`,
									}}
								>
									<Show when={bar.icon}>
										{(icon) => (
											<Dynamic
												component={icon()}
												class="mr-2 size-5 flex-none"
											/>
										)}
									</Show>
									<Show when={bar.href} fallback={<p>{bar.name}</p>}>
										{(href) => (
											<a
												href={href()}
												target={bar.target ?? "_blank"}
												rel="noreferrer"
												class="hover:underline"
											>
												{bar.name}
											</a>
										)}
									</Show>
								</div>
							</div>
							<div class="flex items-center">
								{local.valueFormatter(bar.value)}
							</div>
						</div>
					);
				}}
			</For>
		</div>
	);
};


export {
	BaseChart as Chart,
	BarChart,
	BubbleChart,
	DonutChart,
	LineChart,
	PieChart,
	PolarAreaChart,
	RadarChart,
	ScatterChart,
	BarList,
};
