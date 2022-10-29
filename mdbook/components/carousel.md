---
icon: square
---
# Carousel

The carousel component presents many elements or images in a clean slider.

<iframe src="/demos/carousel.html" title="Carousel demo" name="carouselDemo" id="carouselDemo"></iframe>
<style>
  iframe {
    width: 100%;
    aspect-ratio: 16/8;
    height: max-content;
    border: 0;
  }
</style>

## Import

Those are the minimum import lines needed to run the carousel on the page.

```html
<link rel="stylesheet" href="https://maruchero.github.io/nuklear/style/carousel.css">
<script src="https://maruchero.github.io/nuklear/script/carousel.js"></script>
```

The carousel template presents like this. This template is prefilled with four default items that can be removed. To see the complete list of possible changes go down to the [customization section](#customization).

```html
<div id="carousel" class="nuklear carousel">
  <div class="carousel-container">
    <div class="content">
      <span class="carousel-item">This is the 1 element</span>
      <span class="carousel-item">This is the 2 element</span>
      <span class="carousel-item">This is the 3 element</span>
      <span class="carousel-item">This is the 4 element</span>
    </div>
    <button
      class="prev fa-solid fa-chevron-left"
      onclick="myCarousel.prev()"
      title="Previous"
    ></button>
    <button
      class="next fa-solid fa-chevron-right"
      onclick="myCarousel.next()"
      title="Next"
    ></button>
  </div>
  <div class="bottom">
    <div class="status"></div>
  </div>
</div>
```

## Customization

The carousel component offers a medium range of customizability.

### Content

The content of the carousel can be modified by removing or adding elements inside the `.content` component. In order to get a non-broken result elements like `<span>` and `<div>` are preferred. Every added component inside the `.content` container must have the class `carousel-item`.

```html
<div class="content">
  <span class="carousel-item">Items here can be modified</span>
  <div class="carousel-item">Use divs and spans</div>
  <p class="carousel-item">This is bad >:( </p>
</div>
```

### Style

Carousel component's styling can be customized with some properties in the CSS.

Property | Default | Description
---|:---:|---
`--highlight` | #333 | The color of the highlighted status dot
`--background` | #fff | Background hover color of the highlighted navigation buttons
`--offset` | 2vw | Distance of the 'prev' and 'next' buttons from the carousel content
`--duration` | 0.5s |Sliding animation duration
`--coverage` | 60% | Width of the carousel content related to the parent

Sometimes, especially with external style files, `!important` might be needed.

Example:
```css
.carousel {
  --highlight: dodgerblue!important;
  --duration: 0.3s!important;
}
```
