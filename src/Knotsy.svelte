<!-- Logic -->

<script>
	export let x = 20;
	export let y = 20;
	let r = 4;
	let isMoving = false;

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
        alert(event.currentTarget);
    }
</script>

<svelte:window 
    on:pointerup={handlePointerUp}
    on:pointermove={handlePointerMove}/>

<!-- Structure -->

<div class='knot' style='left: {x}px;  top: {y}px;'
    on:pointerdown={handlePointerDown}>
</div>

<!-- <circle class="knot" cx={x} cy={y} r={r}
    on:pointerdown={handlePointerDown}
    on:click={handleClick}/> -->

<!-- Style -->

<style>
	.knot {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
		border: solid white 1px;
		background-color: blue;
		user-select: none;
		cursor: move;
	}

    .knot:hover {
        fill: purple;
        stroke-width: 2;
    }
</style>


