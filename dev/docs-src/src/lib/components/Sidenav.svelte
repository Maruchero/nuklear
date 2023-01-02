<script>
  export let hidden = false;
  let size = "0";

  /**
   * Handles window resize
   * @param {Event} event: event returned
   */
  function windowResize(event) {
    size = JSON.stringify(event.target);
  }
</script>

<div class="container">
  <h1>Sidenav</h1>

  <p>hidden: {hidden}</p>
  <p>size: {size}</p>
</div>

<svelte:window on:resize={windowResize}></svelte:window>

<style>
  .container {
    width: max(20vw, 270px);
    border-right: 1px solid #ccc;
  }
</style>