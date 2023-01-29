<script>
    export let startKnot;
    export let endKnot;
    export let start = {x: 10, y: 10};
    export let end = {x: 200, y: 200};
    let tension = 100;
    let radius = 4;
</script>

<main>
    <div id='start'></div>
    <div id='end'></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
        <path class='strand' d="M{start.x},{start.y} C{start.x + tension},{start.y} {end.x - tension},{end.y} {end.x},{end.y}" />
        <circle class='knot' cx={start.x} cy={start.y} r={radius}/>
        <circle class='knot' cx={end.x} cy={end.y} r={radius}/>
    </svg>
</main>

<style>
    .knot {
        stroke: white;
        stroke-width: 1;
        fill: red;
    }

    .strand {
        stroke: white;
        stroke-width: 1;
        fill: transparent;
    }


</style>