<!-- LOGIC -->
<script>
	import NodeData from './NodeData';
	import Node from './Node.svelte';
	import Strand from './Strand.svelte';
	import JsonViewerData from './JSONViewerData';
	import JSONViewer from './JSONViewer.svelte';
	import BooleanSwitch from './BooleanSwitch.svelte';
	import StrandData from './StrandData.js';

	export let display = 'HEPPTY';

	// Set up structure
	let mousePos = {
		x: 0,
		y: 0
	};

	let isPanning = false;
	let panOffset = { x: 0, y: 0 }

	let nodes = [];
	let strands = [];

	// Tinker Values

	addNode();
	addStrand();

	//  Methods

	function callAlert(event) {
		alert(event.target.innerHTML);
	}

	function addNode(x, y) {
		const newNode = new NodeData(x, y);
		nodes = [...nodes, newNode];
		console.log(newNode);
	}

	function handlePointerMove(event) {
		mousePos = {
			x: event.clientX,
			y: event.clientY
		};

		if (isPanning) {
			panOffset.x += event.movementX;
			panOffset.y += event.movementY;
			// console.log(panOffset);
		}
	}

	function handleContextMenu(event) {
		addNode(event.clientX, event.clientY);
	}

	function handleKeyDown(event) {
		switch (event.keyCode) {
			case 75:
				// addNode(mousePos.x, mousePos.y);
				addStrand();
				break;
			case 32:
				panOffset = {x:0 ,y:0};
				break;
		}
	}

	function handleMouseDown(event) {
		if (event.which !== 2) return;
		isPanning = true;
	}

	function handleMouseUp(event) {
		if (event.which !== 2) return;
		isPanning = false;
	}

	function handlePointerLeave(event) {
		isPanning = false;
	}

	function addStrand() {
		const newStrand = new StrandData();
		strands = [...strands, newStrand];	
		// console.log(newStrand);
	}
</script>

<!-- STRUCTURE -->

<main class="main" 
	on:contextmenu|preventDefault|stopPropagation={handleContextMenu}
	on:mousedown={handleMouseDown}
	on:pointerleave={handlePointerLeave}>
	<!-- Menu -->
	<div class="ui">
		<span class="display">{display}</span>
		<div class="buttons">
			<button on:click={addNode}>Add</button>
			<button on:click={callAlert}>Delete</button>
		</div>
	</div>
	<div class='loom'>
		<!-- Nodes -->
		{#each nodes as node}
			<Node bind:nodeData={node} pan={panOffset} />
		{/each}
		<!-- Strands -->
		{#each strands as strand}
			<Strand pan={panOffset} />
		{/each}
		<JSONViewer pan={panOffset} />
        <BooleanSwitch pan={panOffset} />
	</div>
</main>
<svelte:window 
	on:keydown={handleKeyDown} 
	on:pointermove={handlePointerMove} 
	on:mouseup={handleMouseUp}/>
<!-- STYLE -->
<style>
	.main {
		position: relative;
		display: flex;
        flex-direction: column;
		width: 100%;
		height: 100%;
		line-height: 100%;
		
        user-select: none;
		overflow: hidden;
	}

    .ui {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		/* align-items: center; */
		margin: 0 0 auto 0;
		background-color: red;
	}

    .loom {
        overflow: hidden;
        background: linear-gradient(rgb(8, 48, 48), #16181a);
        width: 100%;
        height: 100%;
    }



	.display {
		/* background-color: yellowgreen; */
		/* flex-basis: 0; */
		color: white;
		margin: 0 auto 0 auto;
	}

	.buttons {
		display: flex;
		justify-content: center;
	}

	.buttons > * {
		margin: 4px;
	}
</style>
