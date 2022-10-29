---
icon: square
---
# Circular progress

The circular progress component displays a percentage with a rounded colored bar.

<style>
  iframe {
    width: 100%;
    aspect-ratio: 19/6;
    height: max-content;
    border: 0;
  }
</style>
<iframe src="/demos/circular-progress.html" title="Circular progress demo"></iframe>
<br/>

## Import

The circular progress component doesn't need any script, so this is the minimal import required to run the component.

```html
<link rel="stylesheet" href="https://maruchero.github.io/nuklear/style/circular-progress.css">
```

This is the code necessary to build a circular progress component into the page.

```html
<div class="nuklear circular-progress">
  <div class="center"></div>
</div>
```

## Customization

The circular progress component offers a medium range of customizability.

### Style

Circular progress component's styling can be customized with some properties in the CSS.

Property | Default | Description
---|:---:|---
`--percentage` | 50 | The percentage to display
`--color` | orchid | The color of the progress bar
`--background` | #fff | Center background color
`--text-color` | #000 | Text color
`--shadow-color` | rgba(0, 0, 0, 0.23) | Color of the shadows
`--shadow-spread` | 8px | Blur of the shadows

Sometimes, especially with external style files, `!important` might be needed.

Example:
```css
.circular-progress {
  --color: dodgerblue!important;
  --percentage: 63!important;
}
```
