<script>
	import Loop from './Loop.svelte';

    export let node = {
        name: "node name",       
        x: 10,
        y: 20,
        loops: [
            {
                name: 'HERRO',
                type: 'input'  
            },
            {
                name: 'HADOO',
                type: 'input'  
            },
            {
                name: 'Oh no',
                type: 'output'  
            }
        ]
    }

    const minWidth = 100;
    const minHeight = 200;

	let isMoving = false;

    // Methods

	function handlePointerDown(event) {
		isMoving = true;
	}

	function handlePointerUp(event) {
        isMoving = false;
	}

	function handlePointerMove(event) {
		if (isMoving === false) return;

        node.x += event.movementX;
        node.y += event.movementY;
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
	on:pointerdown|preventDefault|stopPropagation={handlePointerDown}
	on:contextmenu|preventDefault|stopPropagation={handleContextMenu}
	style="
        left: {node.x}px; 
        top: {node.y}px;"
>
	<div class="header">
		<span>{node.name}</span>
	</div>
	<div class="body">
		<div class="bar">
			{#each node.loops as loop}
                {#if (loop.type === 'input')}
				    <Loop loop={loop}/>
                {/if}
			{/each}
		</div>
		<div class="bar">
			{#each node.loops as loop}
                {#if (loop.type === 'output')}
				    <Loop loop={loop}/>
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
		/* align-items: center; */
		/* background-color: blue; */
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
