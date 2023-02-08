<!-- LOGIC -->

<script>
    export let currentLine;
	export let indent = 0;


	let open = true;

	function toggleOpen() {
		open = !open;
	}

    // Figure out what the children are.
    // switch(typeof(line)) {
    //     case 'object':
    //         children = Object.entries(line);
    //         break;
    //     case 'array':
    //         children = line;
    //         break;
    //     default:
    //         // children = null;
    //         break;
    // }

    console.log(Object.entries(currentLine));

</script>

<!-- STRUCTURE -->

<!-- <main class="main" style="padding-left: {indent}px" on:click={toggleOpen}>
    <span class="material-symbols-outlined"
        style='transform: rotate({open ? '0deg' : '-90deg'});'>
        expand_more
        </span>
	<p>{name}</p>
</main> -->
<!-- <h3 style="padding-left: {indent}px" on:click={toggleOpen}>
	{typeof(line)} {open ? "(open)" : "(closed)"}
</h3> -->


<!-- OBJECT -->
{#if typeof(currentLine)==='object'}
    <div style="padding-left: {indent}px">{`{`}</div>
    {#each Object.entries(currentLine) as [key, value]}
        <svelte:self currentLine={value} indent={indent+24}/>
    {/each}
    <div style="padding-left: {indent}px">{`}`}</div>
{:else if typeof(currentLine)==='array'}

{:else}
    <div style='padding-left: {indent}px'>{currentLine}</div>
{/if}

<!-- STYLE -->
<style>
	.main {
		display: flex;
		justify-content: left;
		align-items: center;
        gap: 8px;
		background-color: teal;
		cursor: pointer;
		user-select: none;
		padding: 6px;
		/* overflow: hidden; */
	}

	span {
		/* display: inline; */
		background-color: bisque;
		width: 1em;
		height: 1em;
		/* margin: auto; */
		transition: transform 0.1s ease-out;
		/* flex: auto; */
		/* float: left; */
	}

	p {
		/* display: inline; */
		background-color: red;
		/* float: left; */
	}

	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}
</style>
