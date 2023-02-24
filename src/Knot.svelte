<!-- Logic -->

<script>
	export let x = 20;
	export let y = 20;
    export let pan = {x: 0, y:0};
	let r = 6;
    let borderPadding = 2;
	let isMoving = false;
    $: width = 2 * (r + borderPadding);
    $: height = 2 * (r + borderPadding);

	function handlePointerDown(event) {
		isMoving = true;
	}

    function handlePointerUp(event) {
        isMoving = false;
    }

    function handlePointerMove(event) {
        if (isMoving) {
            x += event.movementX;
            y += event.movementY;
        }
    }

    function handleClick(event) {
        // alert(event.currentTarget);
    }
</script>

<svelte:window 
    on:pointerup={handlePointerUp}
    on:pointermove={handlePointerMove}/>

<!-- Structure -->
<svg class='svg' height={2*(r+borderPadding)} width={2*(r+borderPadding)} 
    style='left: {x-width/2 + pan.x}px; top: {y-height/2 + pan.y}px;'>
    <circle class="knot" cx={r+borderPadding}px cy={r+borderPadding}px r={r}
        on:pointerdown={handlePointerDown}
        on:click={handleClick}/>
</svg>
<!-- <div style='left: {x}px; top: {y}px;'></div> -->

<!-- Style -->

<style>
    /* div {
        position: absolute;
        background-color: orange;
        width: 10px;
        height: 10px;
    } */

    .svg {
        position: absolute;
        /* box-sizing: border-box; */
        /* border: solid blue 1px; */
    }

	.knot {
        /* position: relative; */
		stroke: white;
		stroke-width: 1;
		fill: blue;
		user-select: none;
		cursor: move;
	}

    .knot:hover {
        fill: purple;
        stroke-width: 2;
    }
</style>


