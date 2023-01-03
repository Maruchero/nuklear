<script>
  import Topnav from "$components/Topnav.svelte";
  import Sidenav from "$components/Sidenav.svelte";
  import "./light-theme.css";

  let showSidenav = true;
  let alwaysShowSidenav = true;
</script>

<div class="app">
  <div class="nav">
    <Topnav bind:showSidenav alwaysShowSidenav={alwaysShowSidenav} />
  </div>
  <Sidenav shown={showSidenav} bind:alwaysShown={alwaysShowSidenav} />
  <main>
    showSidenav: {showSidenav}<br />
    alwaysShowSidenav: {alwaysShowSidenav}
    <slot />
  </main>
</div>

<style>
  .app {
    height: 100vh;

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: max-content auto;
  }

  .nav {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  main {
    padding: 20px;
    overflow-y: auto;
  }
</style>
