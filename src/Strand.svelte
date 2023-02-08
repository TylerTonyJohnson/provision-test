<script>
	import Knot from './Knot.svelte';

    export let strand = {
        // Default
        knotStart: {
            x: 100,
            y: 100,
            target: undefined
        }, 
        knotEnd: {
            x: 200,
            y: 200,
            target: undefined
        }
    }

    $: width = Math.abs(strand.knotEnd.x - strand.knotStart.x);
    $: height = Math.abs(strand.knotEnd.y - strand.knotStart.y);
    $: leftBorder = Math.min(strand.knotStart.x, strand.knotEnd.x);
    $: topBorder = Math.min(strand.knotStart.y, strand.knotEnd.y);
	$: tension = 0.45 * width;

	// Methods

	function handlePointerDown(event) {}

	function handlePointerUp(event) {}

	function handlePointerMove(event) {}
</script>

	<svg xmlns="http://www.w3.org/2000/svg" 
        style='
            left: {leftBorder}px; 
            top: {topBorder}px;
            width: {width};
            height: {height};'>
        <path
            class="strand"
			d="M{strand.knotStart.x - leftBorder},{strand.knotStart.y - topBorder} C{strand.knotStart.x - leftBorder + tension},{strand.knotStart.y - topBorder} {strand.knotEnd.x - leftBorder -
				tension},{strand.knotEnd.y - topBorder} {strand.knotEnd.x - leftBorder},{strand.knotEnd.y - topBorder}"
		/>
    </svg>
    <Knot bind:x={strand.knotStart.x} bind:y={strand.knotStart.y}/>
    <Knot bind:x={strand.knotEnd.x} bind:y={strand.knotEnd.y}/>


<style>
    svg {
        position: absolute;
        /* border: solid red 1px; */
    }

	.strand {
		stroke: white;
		stroke-width: 3;
		fill: none;
	}

    .strand:hover {
        stroke-width: 6;
    }
</style>
