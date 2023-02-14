<!-- Logic -->

<script>
    import Loom from "../Loom.svelte";
	import Node from "../Node.svelte";
    import Viewer from "../Viewer.svelte";


</script>

<!-- Structure -->

<main class='main'>
    <Loom display='Todl ya so'></Loom> 
</main>

<!-- Style -->

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }

    .main {
        display: block;

        height: 100vh;
        width: 100vw;
        background-color: green;

        margin: 0;
        padding: 0;
    }


</style>