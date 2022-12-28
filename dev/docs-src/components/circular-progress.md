---
icon: square
---
# Circular progress

The circular progress component displays a percentage with a rounded colored bar.

## Basic circular progress

<style>
  iframe {
    width: 100%;
    aspect-ratio: 19/6;
    height: max-content;
    border: 0;
  }
</style>
<iframe src="../../demos/circular-progress.html" title="Circular progress demo"></iframe>
<br/>

This is the code sample shows how to implement the circles in the above picture. More secrets about this component's customization options can be found scrolling down the page.

```html
<div class="nuklear circular-progress" style="--percentage: 81; --color: dodgerblue;">
  <div class="bar">
    <div class="after"></div>
  </div>
  <div class="center"></div>
</div>

<div class="nuklear circular-progress" style="--percentage: 46;">
  <div class="bar">
    <div class="after"></div>
  </div>
  <div class="center"></div>
</div>

<div class="nuklear circular-progress" style="--percentage: 67; --color: orange;">
  <div class="bar">
    <div class="after"></div>
  </div>
  <div class="center"></div>
</div>
```

## Fractional circular progress

<iframe src="../../demos/circular-progress-fractional.html" title="Circular progress demo"></iframe>
<br/>

Circular progress supports also fractions for more precise scoring, instead of using the `--percentage` property, `--numerator` and `--denominator` are modified to assing the progress value.

```html
<div class="container">
  <div class="nuklear circular-progress fractional" style="--numerator: 64; --denominator: 120;">
    <div class="bar">
      <div class="after"></div>
    </div>
    <div class="center"></div>
  </div>
  <div class="nuklear circular-progress fractional" style="--numerator: 50; --denominator: 100;">
    <div class="bar">
      <div class="after"></div>
    </div>
    <div class="center"></div>
  </div>
  <div class="nuklear circular-progress fractional" style="--numerator: 1111; --denominator: 1222;">
    <div class="bar">
      <div class="after"></div>
    </div>
    <div class="center"></div>
  </div>
</div>
```

## Animated circular progress

<iframe src="../../demos/circular-progress-animated.html" title="Circular progress demo"></iframe>
<br/>

Yes, you read that correct! Circular progress can be animated! It's a basic linear animation but it will add dynamicity to the content of your page. Currently it's not available for fractional circular progress.

The function will increase the progress till the `--target` value, now the `--perecntage` property indicates the starting value, if unset the animation will start from 0% but the default displayed value is the target one.

```html
<div class="container">
  <div class="nuklear circular-progress" style="--target: 81; --percentage: 0;">
    <div class="bar">
      <div class="after"></div>
    </div>
    <div class="center"></div>
  </div>
  <div class="nuklear circular-progress" style="--target: 46; --percentage: 0;">
    <div class="bar">
      <div class="after"></div>
    </div>
    <div class="center"></div>
  </div>
  <div class="nuklear circular-progress" style="--target: 67; --percentage: 0;">
    <div class="bar">
      <div class="after"></div>
    </div>
    <div class="center"></div>
  </div>
</div>
```

```js
animateNuklearCircularProgress(document.getElementById("myProgress"), duration=500, delay=100);
```

## Advanced

### Reduce Imports

The circular progress component doesn't need any script, so this is the minimal import required to run the component.

```html
<link rel="stylesheet" href="https://maruchero.github.io/nuklear/v0.1.4/style/circular-progress.css">
```

Script is only needed when you want to animate the circular progress.

```html
<script src="https://maruchero.github.io/nuklear/v0.1.4/script/circular-progress.js"></script>
```

### Customizable properties

Circular progress component's styling can be customized with some properties in the CSS.

Property | Default | Description
---|:---:|---
`--shadow` | 0 0 10px #0002 | Progress bar inner shadow
`--ext-shadow` | none | External shadow. Use this instead of **box-shadow**
`--thickness` | 12.5% | Width of the progress bar
`--target` | 50 | In animated progresses the percentage to achieve wen animated
`--percentage` | 50 | The percentage to display. It's also the initial value for animated progresses
`--color` | blue | The color of the progress bar
`--center-color` | transparent | Center background color
`--text-color` | black | Text color
`--numerator` | 40 | (*only fractional*) Numerator of the fraction
`--denominator` | 100 | (*only fractional*) Denominator of the fraction

Sometimes, especially with external style files, `!important` might be needed.
