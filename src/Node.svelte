<script>
	import Loop from './Loop.svelte';

	export let x = 0;
	export let y = 0;
	export let w;
	export let h;
	export let loopsInput = [1, 2, 3, 4];
	export let loopsOutput = [1, 2, 3];
    const minWidth = 100;
    const minHeight = 200;

	let isDragging = false;
	let offset;

	function handlePointerDown(event) {
		if (isDragging === false) isDragging = true;

		const rect = event.currentTarget.getBoundingClientRect();
		offset = {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		};
	}

	function handlePointerUp(event) {
		if (isDragging === true) isDragging = false;
	}

	function handlePointerMove(event) {
		if (isDragging === false) return;

		x = event.clientX - offset.x;
		y = event.clientY - offset.y;

		console.log(x, y);
	}

    function addLoop() {
        alert("Adding Loop");
    }

	function handleContextMenu(event) {
		alert('hello!');
	}
</script>

<main
	class="main"
	on:pointerdown|preventDefault|stopPropagation={handlePointerDown}
	on:pointerup={handlePointerUp}
	on:pointermove={handlePointerMove}
	on:contextmenu|preventDefault|stopPropagation={handleContextMenu}
	style="
        left: {x}px; 
        top: {y}px;"
>
	<div class="header">
		<span>NODE NAME</span>
	</div>
	<div class="body">
		<div class="bar">
			{#each loopsInput as loop}
				<Loop isInput={true}/>
			{/each}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class='add-button'
                on:click={addLoop}
                >
                <svg
                    class="svg-icon add"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m192 480h-160v160c0 19.2-12.8 32-32 32s-32-12.8-32-32v-160h-160c-19.2 0-32-12.8-32-32s12.8-32 32-32h160v-160c0-19.2 12.8-32 32-32s32 12.8 32 32v160h160c19.2 0 32 12.8 32 32s-12.8 32-32 32z"
                    /></svg
                >
            </div>
		</div>
		<div class="bar">
			{#each loopsOutput as loop}
				<Loop isInput={false}/>
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
		align-items: center;
		/* background-color: blue; */
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
