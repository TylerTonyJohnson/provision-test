<script>
	export let loopData = {
		name: 'HERRO',
		type: 'output'
	};

	// export let type = 'input';
	// export let label = 'Loop Label';
	// export let type = 'String';

	// Methods
	function handleClick(event) {
		console.log(event.currentTarget.getBoundingClientRect());
	}

</script>

<main class="main">
	{#if (loopData.type === 'output')}
		<span class="loop-label">{loopData.name}</span>
	{/if}
	<svg height="24" width="24">
		<circle r="8" cx="12" cy="12" on:click={handleClick} />
	</svg>
	{#if (loopData.type === 'input')}
		<span class="loop-label">{loopData.name}</span>
	{/if}
</main>

<style>
	.main {
		display: flex;
		/* background-color: aqua; */
		align-items: center;
	}

	circle {
		box-sizing: border-box;
		stroke: black;
		stroke-width: 1;
		fill: orange;
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
