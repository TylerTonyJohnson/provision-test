<script>
	import { stop_propagation } from 'svelte/internal';
	import JsonLine from './JSONLine.svelte';
	import JSONViewerData from './JSONViewerData';

	export let nodeData = new JSONViewerData();
    export let pan = {x: 0, y: 0};

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

    function handleInput(event) {

    }

    function collapse() {
        
    }

</script>

<!-- STRUCTURE -->

<main
	class="main"
	style="
    left: {nodeData.x + pan.x}px;
    top: {nodeData.y + pan.y}px;"
>
	<div class="header" on:pointerdown={handlePointerDown}>
		<span>{nodeData.name.toUpperCase()}</span>
	</div>
    <div class='tools'>
        <div class='expand'>+</div>
        <input class='search' 
            placeholder='Search Key'
            on:input={handleInput}/>
        <input class='search' placeholder='Search Value'/>
        <div class='collapse'>-</div>
    </div>
	<div class="body">
		<div class="contents">
			<JsonLine value={nodeData.contents} />
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

		background-color: lightcoral;
		border: solid gray 1px;

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

    .tools {
        display: grid;
        grid-template-columns: auto 1fr 1fr auto;
        /* background-color: aqua; */
    }

    .search {
        border: solid purple 1px;
        padding: 5px;
    }

    .expand, .collapse {
        width: 1em;
        height: 1em;
        text-align: center;
        line-height: 100%;
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
		overflow-y: scroll;
		min-width: 200px;
		min-height: 50px;
		max-height: 500px;
		max-width: 500px;
		user-select: text;
		/* transition: width 0.1s ease-in-out; */
	}
</style>
