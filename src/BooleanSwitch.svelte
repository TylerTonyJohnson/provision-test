<!-- LOGIC -->

<script>
	import Loop from "./Loop.svelte";

    export let pan = {x: 0, y: 0};

    let name='Steven';
    let x = 150;
    let y = 200;
    let value = true;
	let isMoving = false;

    $: loopData = {
        name: value,
        type: 'output'
    }

	function handlePointerDown(event) {
		isMoving = true;
	}

	function handlePointerUp(event) {
		isMoving = false;
	}

	function handlePointerMove(event) {
		if (isMoving === false) return;

		x += event.movementX;
		y += event.movementY;
	}

    function toggleValue(event) {
        value = !value;
    }

</script>

<!-- STRUCTURE -->

<main
	class="main"
	style="
    left: {x + pan.x}px;
    top: {y + pan.y}px;"
>
	<div class="header" on:pointerdown={handlePointerDown}>
		<span>{name.toUpperCase()}</span>
	</div>
	<div class="body">
		<div 
            class="contents"
            style="background-color: {value ? 'red' : 'gray'};"
            on:click={toggleValue}>
		</div>
        <Loop {loopData}/>
	</div>
</main>
<svelte:window on:pointerup={handlePointerUp} on:pointermove={handlePointerMove} />

<!-- STYLE -->

<style>
	.main {
		position: absolute;
		display: flex;
		flex-direction: column;

		background-color: lightcoral;
		border: solid gray 1px;
        min-width: 6em;

		overflow: hidden;
		user-select: none;
		transition: width 0.1s ease-in-out;
		font-family: Arial, Helvetica, sans-serif;
	}

	.header {
		display: flex;
		justify-content: center;

		background-color: #d7dae5;
		font-family: 'Mochiy Pop One', sans-serif;
		font-size: medium;
		color: #0b0c0d;

		padding: 10px;
		/* box-shadow: ; */
	}

	.body {
		display: flex;
		justify-content: space-between;
		flex: 1;
		background-color: #0b0c0d;
	}

	.contents {
		background-color: white;
		padding: 10px;
		margin: 4px;
		user-select: text;
        border-radius: 50%;
		/* overflow-y: scroll; */
		/* min-width: 200px; */
		/* min-height: 50px; */
		/* max-height: 500px; */
		/* max-width: 500px; */
		/* transition: width 0.1s ease-in-out; */
	}
</style>