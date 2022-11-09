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
<iframe src="../../demos/circular-progress.html" title="Circular progress demo"></iframe>
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
`--shadow` | 0 0 10px #0002 | Progress bar inner shadow
`--ext-shadow` | none | External shadow. Use this instead of **box-shadow**
`--thickness` | 12.5% | Width of the progress bar
`--target` | 50 | In animated progresses the percentage to achieve wen animated
`--percentage` | 50 | The percentage to display. It's also the initial value for animated progresses
`--color` | blue | The color of the progress bar
`--center-color` | white | Center background color
`--text-color` | black | Text color

Sometimes, especially with external style files, `!important` might be needed.

Example:
```css
.circular-progress {
  --color: dodgerblue!important;
  --percentage: 63!important;
}
```
