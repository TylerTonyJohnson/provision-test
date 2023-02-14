<!-- LOGIC -->
<script>
	export let key;
	export let value;
	export let indent = 0;
	export let open = true;

	const indentVal = 12;

	function toggleOpen() {
		open = !open;
	}
</script>

<!-- STRUCTURE -->

	<!-- Normal -->
	{#if typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'}
		<div class="line" style="padding-left: {indent}px"
        on:click={toggleOpen}>
            <span class="material-symbols-outlined"></span>
			{#if key !== undefined}
				<div class="key">{key}:</div>
			{/if}
			<div class={typeof value}>{value}</div>
		</div>

	<!-- Array -->
	{:else if Array.isArray(value)}
		<div class="line" style="padding-left: {indent}px"
        on:click={toggleOpen}>
            <span class="material-symbols-outlined"
            style='transform: rotate({open ? '0deg' : '-90deg'});'>
            expand_more
            </span>
			{#if key !== undefined}
				<div class="array">{key}:</div>
			{/if}
			<div class="array">{open ?`[` : '[...]'}</div>
		</div>
        {#if open}
            {#each value as child, index}
                <svelte:self key={index} value={child} indent={indent + indentVal} />
            {/each}
            <div class="array" style="padding-left: {indent}px">
                {`]`}
            </div>
        {/if}

		<!-- Object -->
	{:else if typeof value === 'object'}
		<div class="line" style="padding-left: {indent}px"
        on:click={toggleOpen}>
            <span class="material-symbols-outlined"
            style='transform: rotate({open ? '0deg' : '-90deg'});'>
            expand_more
            </span>
            {#if key !== undefined}
                <div class="object">{key}:</div>
            {/if}
			<div class="object">{open ?`{` : '{...}'}</div>
		</div>
        {#if open}
            {#each Object.entries(value) as [key, value]}
                <svelte:self {key} {value} indent={indent + indentVal} />
            {/each}
            <div class='object' style="padding-left: {indent}px">
                {`}`}
            </div>
        {/if}
	{/if}

<!-- STYLE -->
<style>

	.line {
		display: flex;
		/* justify-content: left; */
		align-items: center;
		gap: 0.5em;
		cursor: pointer;
		/* user-select: none; */
		/* padding: 6px; */
		/* overflow: hidden; */

		/* background-color: teal; */
		/* border: solid red 1px; */
	}

    .line:hover {
        background-color: rgba(128, 0, 128,0.25);
    }

    .line:focus {
        background-color: rgba(16, 75, 94, 0.25);
    }

	span {
        user-select: none;
        /* aspect-ratio: 1; */
		/* display: inline; */
		/* background-color: bisque; */
        font-size: large;
        font-weight: bold;
		width: 1em;
		/* height: 0.5em; */
		/* margin: auto; */
		transition: transform 0.1s ease-out;
		/* flex: auto; */
		/* float: left; */
	}

	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
        /* background-color: aqua; */
	}

/* Colors */

	.string {
		color: green;
	}

	.number {
		color: orange;
	}

	.boolean {
		color: purple;
	}

	.array {
		color: red;
	}

	.object {
		color: darkblue;
	}

	.key {
		color: lightseagreen;
	}
</style>
