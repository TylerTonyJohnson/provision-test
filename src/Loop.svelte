<script>
	export let loopData = {
		name: 'HERRO',
		type: 'output'
	};

	// Methods
	function handleClick(event) {
		console.log(event.currentTarget.getBoundingClientRect());
	}

</script>

<main class="main">
	{#if (loopData.type === 'output')}
		<span class="loop-label">{loopData.name}</span>
	{/if}
	<svg class='circle' height="24" width="24">
		<circle r="8" cx="12" cy="12" on:click={handleClick} />
	</svg>
	{#if (loopData.type === 'input')}
		<span class="loop-label">{loopData.name}</span>
	{/if}
</main>

<style>
	.main {
		display: flex;
		/* position: relative;		 */
		/* background-color: aqua; */
		align-items: center;
	}

	.circle {
		/* position: absolute; */
		/* box-sizing: border-box; */
		stroke: black;
		stroke-width: 1;
		fill: orange;
		/* margin-top: auto; */
		/* margin-bottom: auto; */
	}

	circle:hover {
		fill: purple;
	}

	.loop-label {
		font-family: 'Mochiy Pop One', sans-serif;
		font-size: small;
		color: #d7dae5;
		padding-left: 6px;
		padding-right: 6px;
		border: solid gray 1px;
		/* min-width: 3em; */
	}

	@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
</style>
