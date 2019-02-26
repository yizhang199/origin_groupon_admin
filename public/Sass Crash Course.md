### extends

- install **Live Sass complier** in VS Code.
- setup by click the `.scss` file and click `watch sass` button at bottom of code editer

### syntax

- **variables**

```css
$color: (
  primary: #005dff,
  accent: #fff6bb
);
@function color($color-name) {
  @return map-get($colors, $color-name);
}
body {
  font-family: "Motserrat";
  margin: 0;
  #bg {
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
    background-color: color(primay);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
}
```

### useful links

- https://www.bennettfeely.com/clippy/
