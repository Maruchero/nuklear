# Carousel

## Importing

Import the library. Then copy this code in your html page.

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

The `Carousel` component needs also a script to work, to initialize the component add this code at the end of the `<body>` tag.

```html
<script>
  let myCarousel = new NkCarousel("carousel");
</script>
```

Remember to also change the name on the component at `<button onclick="">`

## Customization

The `Carousel` component can be customized in many different ways. Carousel items will be put inside the `div.content` with `class="carousel-item"`.

You can add `style="background-image: url()"` on a `.carousel-item` to make it an image slider.

There are also some properties that you can modify to further modify your component. Maybe you will need to specify `!important` for some of them... 😅

```css
--highlight: #333;      /* Choose the color of the highlighted dot, at the bottom of the carousel */
--background: white;    /* Background color of the highlighted 'prev' and 'next' buttons */
--offset: 2vw;          /* Distance of the 'prev' and 'next' buttons from the carousel content */
--duration: 0.5s;       /* Sliding animation duration */
--coverage: 60%;        /* Width of the carousel content related to the parent */
```
