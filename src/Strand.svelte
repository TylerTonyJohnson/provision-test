<!-- LOGIC -->

<script>
	import NodeData from "./NodeData";


	export let strandData = {
		// Default
		start: {
			x: 100,
			y: 100,
			target: undefined
		},
		end: {
			x: 200,
			y: 200,
			target: undefined
		}
	};

	export let pan = { x: 0, y: 0 };

    let isStartMoving = false;	// This could be done more efficiently
    let isEndMoving = false;	// This could be done more efficiently
	
	// Circle style
	let radius = 6;
	let circlePadding = 6;
	
	// Line style
	let lineType = 'straight';
	let linePadding = 20;

	// Circle data
	$: circleDim = 2 * (circlePadding + radius);
	$: startX = strandData.start.x - circlePadding - radius + pan.x;
	$: startY = strandData.start.y - circlePadding - radius + pan.y;
	$: endX = strandData.end.x - circlePadding - radius + pan.x;
	$: endY = strandData.end.y - circlePadding - radius + pan.y;

	// Line data
	$: leftBorder = Math.min(strandData.start.x, strandData.end.x) - linePadding + pan.x;
	$: topBorder = Math.min(strandData.start.y, strandData.end.y) - linePadding + pan.y;
	$: width = Math.abs(strandData.end.x - strandData.start.x) + 2 * linePadding;
	$: height = Math.abs(strandData.end.y - strandData.start.y) + 2 * linePadding;
	
	// Bezier data
	$: tension = 0.45 * width;


	// Methods

	function handlePointerDownStart(event) {
		isStartMoving = true;
	}

	function handlePointerDownEnd(event) {
		isEndMoving = true;
	}

    function handlePointerUp(event) {
        isStartMoving = false;
        isEndMoving = false;
    }

    function handlePointerMove(event) {
        if (isStartMoving) {
            strandData.start.x += event.movementX;
            strandData.start.y += event.movementY;
        }

		if (isEndMoving) {
			strandData.end.x += event.movementX;
            strandData.end.y += event.movementY;
		}
    }
</script>

<!-- STRUCTURE -->

<svg
	xmlns="http://www.w3.org/2000/svg"
	style="
            left: {leftBorder}px; 
            top: {topBorder}px;
            width: {width};
            height: {height};"
>
	{#if lineType === 'bezier'}
		<path
			class="strand"
			d="M{strandData.start.x - leftBorder},{strandData.start.y - topBorder} C{strandData.start.x -
				leftBorder +
				tension},{strandData.start.y - topBorder} {strandData.end.x -
				leftBorder -
				tension},{strandData.end.y - topBorder} {strandData.end.x - leftBorder},{strandData.end.y -
				topBorder}"
		/>
	{:else if lineType === 'straight'}
		<line
			class="strand"
			x1={strandData.start.x - leftBorder + pan.x}
			y1={strandData.start.y - topBorder + pan.y}
			x2={strandData.end.x - leftBorder + pan.x}
			y2={strandData.end.y - topBorder + pan.y}
			stroke="white"
		/>
	{/if}
</svg>

<svg
	style="
	left: {startX}px; 
	top: {startY}px;
	width: {circleDim};
	height: {circleDim};"
	>
	<circle
		class="knot"
		cx="{circleDim/2}px"
		cy="{circleDim/2}px"
		r={radius}
		on:pointerdown={handlePointerDownStart}
	/>
</svg>
<svg
	style="
	left: {endX}px; 
	top: {endY}px;
	width: {circleDim};
	height: {circleDim};"
	>
	<circle
		class="knot"
		cx="{circleDim/2}px"
		cy="{circleDim/2}px"
		r={radius}
		on:pointerdown={handlePointerDownEnd}
	/>
</svg>

<svelte:window 
    on:pointerup={handlePointerUp}
    on:pointermove={handlePointerMove}/>

<!-- STYLE -->

<style>
	svg {
		position: absolute;
		z-index: 2;
		border: solid red 1px;
		pointer-events: none;
	}

	.strand {
		stroke: white;
		stroke-width: 3;
		fill: none;
		position: relative;
	}


	.strand:hover {
		stroke-width: 6;
	}

	.knot {
		/* position: relative; */
		stroke: white;
		stroke-width: 1;
		fill: blue;
		user-select: none;
		cursor: move;
		pointer-events: all;
	}

	.knot:hover {
		fill: purple;
		stroke-width: 2;
	}
</style>
