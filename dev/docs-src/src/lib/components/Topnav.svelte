<script>
  import logo from "$img/logo-dark.png";

  export let showSidenav = true;
  export let alwaysShowSidenav = true;

  $: showSidenav = alwaysShowSidenav;

  function toggleSidenav() {
    showSidenav = !showSidenav;
  }
</script>

<nav>
  <div class="left">
    <button class="item bi bi-list" on:click={toggleSidenav} />
  </div>
  <div class="logo">
    <img src={logo} alt="Nuklear" />
  </div>
  <div class="right">
    <a class="item bi bi-github" href="./"><i /></a>
    <a class="item bi bi-moon" href="./"><i /></a>
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

  /* Logo */
  .logo {
    height: 4rem;
    max-height: 100%;
    padding: 10px;
  }

  img {
    height: 100%;
  }
</style>
