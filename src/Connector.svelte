<script>
	import Node from "./Node.svelte";
	import Strand from "./Strand.svelte";

	export let display = 'HEPPTY';

    const newNode = {    
            x: 10,
            y: 20
        }

    let nodes = [
        newNode, 
        newNode
    ];

    let strands = [1];

//  Methods

	function callAlert(event) {
		alert(event.target.innerHTML);
	}

    function addNode() {
        nodes = [...nodes, newNode];
    }

    function handleContextMenu() {
        alert("Context Menu!");
    }
</script>

<main class="main"
    on:contextmenu|preventDefault={handleContextMenu}>
	<div class='ui'>
		<span class="display">{display}</span>
		<div class="buttons">
			<button on:click={addNode}>Add</button>
			<button on:click={callAlert}>Delete</button>
		</div>
	</div>
    {#each nodes as node}
        <Node
            x={node.x}
            y={node.y}
            w={node.w}
            h={node.h}
        />
    {/each}
    {#each strands as strand}
        <Strand/>
    {/each}
</main>

<style>
	.main {
		position: relative;
		display: block;
		background-color: #16181a;
		/* align-items: center; */
		/* justify-content: center; */
		width: 100%;
		height: 100%;
		line-height: 100%;
	}

    .ui {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */
        margin: 0 0 auto 0;
        background-color: red;
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
