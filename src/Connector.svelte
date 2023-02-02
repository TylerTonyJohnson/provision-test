<script>
	import { onMount } from "svelte";
    import Node from "./Node.svelte";
	import Strand from "./Strand.svelte";

	export let display = 'HEPPTY';

    let nodes = [
        
    ];

    const startStrand = {
        knotA: {
            x: 100,
            Y: 100
        }, 
        knotB: {
            x: 200,
            y: 200
        }
    }

    let strands = [startStrand];

    addNode();


//  Methods

	function callAlert(event) {
		alert(event.target.innerHTML);
	}

    function addNode() {
        const newNode = {
            name: "Tootles",
            x: 100,
            y: 200,
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
        nodes = [...nodes, newNode];
    }

    function handleContextMenu() {

    }
</script>

<main class="main"
    on:contextmenu={handleContextMenu}>
    <!-- Menu -->
	<div class='ui'>
		<span class="display">{display}</span>
		<div class="buttons">
			<button on:click={addNode}>Add</button>
			<button on:click={callAlert}>Delete</button>
		</div>
	</div>
    <!-- Nodes -->
    {#each nodes as node}
        <Node
            bind:node={node}
        />
    {/each}
    <!-- Strands -->
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
        overflow: hidden;
        user-select: none;
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
