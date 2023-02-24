<script>
	// import { onMount } from 'svelte';
	import Loop from './Loop.svelte';

    export let nodeData;
	export let pan = {x: 0, y: 0};

	let isMoving = false;

    // Methods

	// onMount(console.log(nodeData.x, nodeData.y));

	function handlePointerDown(event) {
		if (event.which === 1) {
			isMoving = true;
		}
	}

	function handlePointerUp(event) {
        isMoving = false;
	}

	function handlePointerMove(event) {
		if (isMoving === false) return;

        nodeData.x += event.movementX;
        nodeData.y += event.movementY;

		if (nodeData.loops[0].knot) {
			nodeData.loops[0].knot.knotEnd.x = nodeData.x;
			nodeData.loops[0].knot.knotEnd.y = nodeData.y;
			console.log(nodeData.loops[0].knot.knotEnd);
		}
	}

    function addLoop() {
        alert("Adding Loop");
    }

	function handleContextMenu(event) {
		alert('hello!');
	}

</script>
<svelte:window 	
    on:pointerup={handlePointerUp}
    on:pointermove={handlePointerMove}/>

<!-- Structure -->

<main
	class="main"
	on:contextmenu|preventDefault|stopPropagation={handleContextMenu}
	style="
        left: {nodeData.x + pan.x}px; 
        top: {nodeData.y + pan.y}px;"
>
	<div class="header"
		on:pointerdown|preventDefault|stopPropagation={handlePointerDown}>
		<span>{nodeData.name.toUpperCase()}</span>
	</div>
	<div class="body">
		<div class="bar">
			{#each nodeData.loops as loop}
                {#if (loop.type === 'input')}
				    <Loop loopData={loop}/>
                {/if}
			{/each}
		</div>
		<div class='contents'>
			<div>{nodeData.contents}</div>
		</div>
		<div class="bar">
			{#each nodeData.loops as loop}
                {#if (loop.type === 'output')}
				    <Loop loopData={loop}/>
                {/if}
			{/each}
		</div>
	</div>
</main>

<style>
	.main {
		position: absolute;
		display: flex;
		flex-direction: column;

		/* border-radius: 10px; */
		/* justify-content: center; */
        min-width: 100px;
        min-height: 100px;
        
		background-color: lightcoral;
		border: solid gray 1px;
        
		overflow: hidden;
		user-select: none;
		/* transition: left 0.5s linear, top 0.5s linear; */
	}

	.header {
		display: flex;
		justify-content: center;

		background-color: #d7dae5;
        font-family: 'Mochiy Pop One', sans-serif;
        font-size: medium;
        color: #0b0c0d;

        padding: 10px;
	}

	.body {
		display: flex;
		justify-content: space-between;
		background-color: #0b0c0d;
		flex: 1;
	}

	.bar {
		display: flex;
		flex-direction: column;
		padding: 4px;
		/* align-items: center; */
		/* background-color: blue; */
	}

	.contents {
		background-color: white;
		padding: 10px;
	}

    .add-button {
        flex-shrink: 1;
        /* background-color: aliceblue; */
        font-family: 'Mochiy Pop One', sans-serif;
        font-size: small;
        color: #d7dae5;
        padding-left: 3px;
        padding-right: 3px;
    }

	.add {
		height: 20px;
		width: 20px;
        vertical-align: middle;
        fill: green;
        overflow: hidden;
        stroke: black;
        stroke-width: 1;
		border-radius: 50%;
		/* border: solid black 1px; */
		text-align: center;
	}

    .add:hover {
        fill: purple;
    }



    @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
</style>
