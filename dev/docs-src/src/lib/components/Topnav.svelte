<script>
  export let showSidenav = true;
  export let alwaysShowSidenav = true;

  $: showSidenav = alwaysShowSidenav;

  function toggleSidenav() {
    showSidenav = !showSidenav;
    console.log("showSidenav:", showSidenav);
  }
</script>

<nav>
  <div class="left">
    <button class="item bi bi-list" on:click={toggleSidenav}></button>
  </div>
  <h3 class="logo m-0">LOGO HERE</h3>
  <div class="right">
    <a class="item bi bi-github" href="./"><i></i></a>
    <a class="item bi bi-moon" href="./"><i></i></a>
  </div>
</nav>

<style>
  nav {
    /* display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px; */
    display: grid;
    align-items: center;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 10px;
    padding: 0 10px;

    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    background: var(--background-nav);
    color: white;
  }

  nav .left,
  nav .right {
    display: flex;
    gap: 1em;
  }

  nav .right {
    justify-content: flex-end;
  }

  button,
  a {
    background: inherit;
    border: inherit;
    padding: inherit;
    color: inherit;
    text-decoration: none;
  }
  .item {
    display: flex;
    align-items: center;
  }

  .item.bi {
    font-size: 1.5em;
  }
</style>
