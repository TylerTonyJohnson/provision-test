<script>
	import { stop_propagation } from 'svelte/internal';
	import JsonLine from './JSONLine.svelte';
    import JSONViewerData from './JSONViewerData';

	export let nodeData = new JSONViewerData();

    let isMoving = false;

    function handlePointerDown(event) {
		isMoving = true;
	}

	function handlePointerUp(event) {
        isMoving = false;
	}

	function handlePointerMove(event) {
		if (isMoving === false) return;

        nodeData.x += event.movementX;
        nodeData.y += event.movementY;
	}
</script>

<!-- STRUCTURE -->

<main
	class="main"
	style="
    left: {nodeData.x}px;
    top: {nodeData.y}px;"
>
	<div class="header"
    on:pointerdown={handlePointerDown}>
		<span>{nodeData.name.toUpperCase()}</span>
	</div>
	<div class="body">
		<div class="contents">
			<JsonLine currentLine={nodeData.contents}/>
		</div>
	</div>
</main>
<svelte:window on:pointerup={handlePointerUp} on:pointermove={handlePointerMove} />

<!-- STYLE -->
<style>
	.main {
		position: absolute;
		display: flex;
		flex-direction: column;

		min-width: 100px;
		min-height: 100px;

		background-color: lightcoral;
		border: solid gray 1px;

		overflow: hidden;
		user-select: none;
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
		background-color: #0b0c0d;
		flex: 1;
	}

	.contents {
		background-color: white;
		padding: 10px;
		margin: 4px;
	}
</style>
