<script>
  let windowWidth, windowHeight;

  // Const
  const width = {
    open: "max(20vw, 270px)",
    close: "0",
  };

  // Instance variables
  export let shown = true;
  export let alwaysShown = true;
  $: alwaysShown = (windowWidth ?? 1000) > 900;
  $: shown = alwaysShown;

  // Component width
  let style;
  $: style = {
    width: shown ? width.open : width.close,
  };
</script>

<div class="container p-0" style="width: {style?.width ?? width.open}">
  <div class="p-3 pt-5 content accordion-flush">
    <a class="item" href="/">Welcome</a>
    <a class="item" href="/getting-started">Getting Started</a>

    <div class="accordion-item">
      <div class="accordion-header" id="accordion-components">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-components"
        >
          <a class="item" href="/components" on:click|capture={null}>Components</a>
        </button>
      </div>
      <div
        id="collapse-components"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          <a class="item" href="/carousel">Carousel</a>
          <a class="item" href="/circular-progress">Circular progress</a>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" id="accordion-js-modules">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-js-modules"
        >
          <a class="item" href="/js-modules" on:click|capture={null}>JS modules</a>
        </button>
      </div>
      <div
        id="collapse-js-modules"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          <a class="item" href="/carousel">Parallax</a>
        </div>
      </div>
    </div>

    <a class="item" href="/faq">FAQ</a>
    <a class="item" href="/about">About</a>
  </div>
</div>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<style>
  .container {
    box-sizing: border-box;
    width: max(20vw, 270px);
    border-right: 1px solid #ccc;

    overflow-x: hidden;

    transition: width 0.3s ease-out;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .content .item {
    display: block;
    padding: 5px;
  }

  .accordion-item,
  .accordion-header,
  .accordion-button,
  .accordion-collapse {
    background: inherit!important;
    padding: 0;
    border: inherit;
    box-shadow: none;
  }

  .accordion-body {
    padding: 3px 10px;
  }
</style>
