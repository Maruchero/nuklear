<script>
  // import hljs from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/highlight.min.js";
  import { onMount } from "svelte";

  export const lang = "html";

  let className = "language-" + lang;

  function highlight() {
    if (hljs) hljs.highlightAll();
  }

  onMount(highlight);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css"
  />
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
    on:load={highlight}
  ></script>
</svelte:head>

<pre>
  <code class={className}><slot /></code>
</pre>

<style>
  code {
    border-radius: 5px;
  }
</style>
