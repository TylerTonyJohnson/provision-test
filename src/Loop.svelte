<script>
	export let isInput = true;
    export let label = 'Loop Label';
    export let type = 'String';
</script>

<main class='main'>
	{#if !isInput}
		<span class='loop-label'>{label}</span>
	{/if}
	<svg height="24" width="24">
		<circle />
	</svg>
	{#if isInput}
		<span class='loop-label'>{label}</span>
	{/if}
</main>

<style>
    .main {
        display: flex;
        /* background-color: aqua; */
        align-items: center;
    }

	circle {
		r: 8;
		cx: 12;
		cy: 12;
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
    }

    @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
</style>
