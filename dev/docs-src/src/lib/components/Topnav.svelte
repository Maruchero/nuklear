<nav>
  <div class="left">
    <span class="item">Item1</span>
    <span class="item">Item2</span>
    <span class="item">Item3</span>
  </div>
  <h3 class="logo m-0">LOGO HERE</h3>
  <div class="right">
    <span class="item">Item1</span>
    <span class="item">Item2</span>
    <span class="item">Item3</span>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
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
    gap: 10px;
  }
</style>
