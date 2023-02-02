<script>
	import Knot from './Knot.svelte';

    export let strand = {
        knotA: {
            x: 100,
            y: 100,
            target: undefined
        }, 
        knotB: {
            x: 200,
            y: 200,
            target: undefined
        }
    }

    $: width = Math.abs(strand.knotB.x - strand.knotA.x);
    $: height = Math.abs(strand.knotB.y - strand.knotA.y);
    $: leftBorder = Math.min(strand.knotA.x, strand.knotB.x);
    $: topBorder = Math.min(strand.knotA.y, strand.knotB.y);
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
			d="M{strand.knotA.x - leftBorder},{strand.knotA.y - topBorder} C{strand.knotA.x - leftBorder + tension},{strand.knotA.y - topBorder} {strand.knotB.x - leftBorder -
				tension},{strand.knotB.y - topBorder} {strand.knotB.x - leftBorder},{strand.knotB.y - topBorder}"
		/>
    </svg>
    <Knot bind:x={strand.knotA.x} bind:y={strand.knotA.y}/>
    <Knot bind:x={strand.knotB.x} bind:y={strand.knotB.y}/>


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
