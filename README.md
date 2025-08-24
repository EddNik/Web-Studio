#### 🧩 It was the first completed project. This is a training project. 
- So the goal was to master the basic knowledge of layout, styling, and adaptive.
- Adding JS was my own decision to add functionality to the site.


### 👩‍🏫 Adaptive Design

A comprehensive guide to responsive and adaptive web design, covering media queries, mobile-first approach, and responsive images.

### Table of Contents

- [Overview](#overview)
- [Chrome DevTools](#chrome-devtools)
- [Media Queries](#media-queries)
- [Media Types](#media-types)
- [Logical Operators](#logical-operators)
- [Mobile-First Approach](#mobile-first-approach)
- [Adaptive Graphics](#adaptive-graphics)
- [Responsive Images](#responsive-images)
- [Background Images](#background-images)
- [Additional Resources](#additional-resources)

### Overview

#### Adaptive vs Responsive Design

- **Adaptive Layout** — Creating multiple layout variants for different devices (desktop, tablet, mobile)
- **Responsive Layout** — One layout that changes structure/styles depending on screen width

Key concepts covered:
- Media queries: media-type and media-feature
- Logical operators: and, not, or
- Viewport meta tag
- Chrome DevTools for mobile development
- Mobile-first CSS approach

### Chrome DevTools

Chrome Developer Tools allow you to:
- Test media queries
- Preview mobile versions of pages
- Debug adaptive layouts

### Media Queries

#### Basic Properties

- `min-width` — Styles apply **from** the specified size and up
- `max-width` — Styles apply **up to** the specified size

#### Example

```css
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

#### Style Overriding / Cascading

Styles from media queries can override base styles. It's important to maintain proper order and specificity.

### Media Types

#### `screen`
Most common type. Applied to displays: monitors, tablets, phones, etc.
```css
@media screen and (max-width: 600px) { /* styles */ }
```

#### `print`
Applied when the page is printed or viewed in print preview mode.
```css
@media print { /* styles */ }
```

#### `all`
Applied to all media types (screens, print, speech, etc.).
```css
@media all and (min-width: 800px) { /* styles */ }
```

#### `only`
Protective keyword. Applies styles only if the browser supports media queries.
```css
@media only screen and (max-width: 600px) { /* styles */ }
```

#### `not`
Negation: applies styles to everything except the specified media type.
```css
@media not print { /* styles */ }
```

### Logical Operators

#### `and`
```css
@media screen and (min-width: 400px) and (max-width: 800px) { /* styles */ }
```

#### `or` (comma `,`)
```css
@media screen and (max-width: 600px), (min-width: 900px) { /* styles */ }
```

#### `not`
```css
@media not print { /* styles */ }
```

### Mobile-First Approach

An approach where you first create a design for mobile devices, then gradually add support for larger screens:

| Device   | Screen Size     |
|----------|-----------------|
| Mobile   | 0 – 767px       |
| Tablet   | 768 – 1023px    |
| Desktop  | 1024px and up   |

## Adaptive Graphics

Adaptive images and background images that change depending on screen resolution.

### Responsive Images

#### Basic Responsive Image

```html
<img
  srcset="./img/photo.jpg 1x, ./img/photo@2x.jpg 2x"
  src="./img/photo.jpg"
  alt="Image description for all versions"
/>
```

#### Advanced Example with Picture Element

```html
<img
  src="./images/kisspng-milk.png"
  srcset="./images/milk.png 1x, ./images/nuts.png 2x"
  width="206"
  height="160"
  alt="Milk chocolate"
/>

<picture>
  <source
    media="(min-width: 1200px)"
    srcset="../images/nazar.png 1x, ../images/how-its-made.jpg 2x"
  />
  <source
    media="(min-width: 768px)"
    srcset="../images/olena.png 1x, ../images/how-its-made.jpg 2x"
  />
  <source
    media="(max-width: 767px)"
    srcset="../images/viktoria.png 1x, ../images/how-its-made.jpg 2x"
  />
  <img src="../images/semi-sweet.png" alt="semi-sweet" />
</picture>
```

### Background Images

#### High-Resolution Background Images

```css
@media (min-resolution: 192dpi) {
  .box {
    background-image: url('photo@2x.png');
  }
}

@media screen and (min-width: 1200px) and (resolution: 192dpi) {
  .box {
    background-image: url('photo@2x.png');
  }
}

.box {
  background-image: image-set(url('photo.png') 1x, url('photo@2x.png') 2x);
  background-size: cover;
}
```

> ⚠️ **Note:** 96dpi is standard density. For Retina/HiDPI use 192dpi (2x). 1x img (96dpi), 2x (192dpi), 3x (288dpi)

### Additional Resources

#### 🔹 Design & Components
- 🖼 [Dashly Theme](https://dashly-theme.com/account.html) – Form usage examples
- 🖼 [Ant Design](https://ant.design/components/overview/) – Popular JS component library

#### 🔹 CSS Learning Resources
- [Inline-block elements peculiarities](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
- [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](http://flexboxfroggy.com/) – Flexbox learning game
- [Flexbox Zombies](https://mastery.games/flexboxzombies/) – Another flexbox game
- [CSS Specification](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Class Dictionary](https://github.com/YK911/basic-dictionary) – Common CSS class words
- [CSS Reference](https://css.in.ua/) – HTML & CSS handbook
- [Modern Normalize](https://cdnjs.com/libraries/modern-normalize)

#### 🔹 Tools & Utilities
- 🖼 [Remove.bg](https://www.remove.bg/) – Background removal service
- 🛠 [iLoveIMG](https://www.iloveimg.com/) – Image processing tools
- 🛠 [Squoosh](https://squoosh.app/) – Image optimization (JPEG)
- 🛠 [TinyPNG](https://tinypng.com/) – Image optimization (PNG)
- 🛠 [Caninclude](https://caninclude.glitch.me/) – Check if one tag can be nested in another

#### 🔹 Validators & Testing
- ✅ [W3C HTML Validator](https://validator.w3.org/) – HTML code validation
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/) – CSS validation
- [PageSpeed](https://pagespeed.web.dev/) – Website speed optimization

#### 🔹 Development Resources
- 🖼 [HTML Arrows](https://www.toptal.com/designers/htmlarrows/symbols/) – Special characters
- 📖 [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/) – Quick Emmet commands
- 📖 [MDN HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML) – Official HTML docs
- [HTML Reference](https://htmlreference.io/) – Interactive HTML reference

#### 🔹 Deployment & Hosting
- [Netlify](https://www.netlify.com/) – Static site hosting
- [Favicon Converter](https://favicon.io/favicon-converter/) – SVG, ICO + webmanifest.json

#### 🔹 Design Tools
- 📖 [Figma Template](https://www.figma.com/design/LWMTodUscRGMcbTpxE3kgI/Simply-Chocolate?node-id=1-5060&t=FZ9D8VYSe7z6EkSG-0) – Design template

#### 🧰 SVG Sprites
- Generate via: [IcoMoon](https://icomoon.io/app/)
- SVG Optimization: [SVGOMG](https://svgomg.net/)


- `<svg class="class-name" width="24" height="24">`
  `<use href="./sprite.svg#icon-instagram"></use>` `</svg>`

---
