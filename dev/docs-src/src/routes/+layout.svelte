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
    <slot />
  </main>
</div>

<style>
  .app {
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: max-content auto;
  }

  .nav {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  main {
    width: 100%;
    padding: 20px;
    overflow-y: auto;
  }
</style>
