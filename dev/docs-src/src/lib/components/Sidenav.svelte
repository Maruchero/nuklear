<script>
  let windowWidth, windowHeight;

  // Const
  const width = {
    open: "max(20vw, 270px)",
    close: "0"
  }
  
  // Instance variables
  export let shown = true;
  export let alwaysShown = true;
  $: alwaysShown = (windowWidth ?? 1000) > 900;
  $: shown = alwaysShown;

  // Component width
  let style;
  $: style = {
    "width": shown ? width.open : width.close,
  }
  console.log(style);

  // Functions
  function toggle() {
    if (alwaysShown) {
      shown = !shown;
      console.log(shown);
    }
  }
</script>

<div class="container p-0" style="width: {style?.width ?? width.open}">
  <div class="p-3">
    <h1>Sidenav</h1>
  
    <p>hidden: {alwaysShown}</p>
    <p>window width: {windowWidth}</p>
  
    <button class="btn btn-primary" on:click={toggle}>Toggle</button>
  </div>
</div>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<style>
  .container {
    box-sizing: border-box;
    width: max(20vw, 270px);
    border-right: 1px solid #ccc;

    overflow-x: hidden;

    transition: width .3s ease-out;
  }
</style>
