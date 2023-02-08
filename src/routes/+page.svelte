<!-- Logic -->

<script>
    import Connector from "../Connector.svelte";
	import Node from "../Node.svelte";
    import Viewer from "../Viewer.svelte";


</script>

<!-- Structure -->

<main class='main'>
    <Connector display='Todl ya so'></Connector> 
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