#### 🧩 It was the first completed project. This is a training project. 
- So the goal was to master the basic knowledge of layout, styling, and adaptive.
- Adding JS was my own decision to add functionality to the site.



### 👩‍🏫 Адаптивний дизайн

- медіа-запити: media-type та media-feature
- логічні оператори: and, not, or
- метатег viewport
- Chrome DevTools для роботи з мобільною версткою
- адаптивна і респонсивна верстка
- підхід mobile-first CSS

---

#### 1. Адаптивність (adaptive)

**Адаптивна верстка** — створення кількох варіантів макетів під різні пристрої
(десктоп, планшет, мобільний).  
**Респонсивна верстка** — один макет, який змінює структуру/стилі в залежності
від ширини екрана.

---

#### 2. DevTools

Інструменти розробника у браузері Chrome дозволяють:

- перевіряти медіа-запити
- переглядати мобільну версію сторінки
- дебажити адаптивну верстку

---

#### 3. Медіа-запити

##### Основні властивості:

- `min-width` — стилі застосовуються **від** вказаного розміру
- `max-width` — стилі застосовуються **до** вказаного розміру

##### Приклад:

```css
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

##### Перевизначення стилів / каскадування:

Стилі з media-запитів можуть перекривати базові стилі. Важливо дотримуватись
порядку і специфічності.

---

#### 4. Медіа-типи

- `screen`  
  Це найпоширеніший тип. Застосовується до дисплеїв: монітори, планшети,
  телефони тощо.  
  `@media screen and (max-width: 600px) {...}`

- `print`  
  Застосовується, коли сторінка друкується або переглядається в режимі
  попереднього перегляду друку.  
  `@media print {...}`

- `all`  
  Застосовується до всіх типів медіа (екрани, друк, голосові тощо).  
  `@media all and (min-width: 800px) {...}`

- `only`  
  Захисне ключове слово. Застосовує стилі тільки якщо браузер підтримує
  медіа-запит.  
  `@media only screen and (max-width: 600px) {...}`

- `not`  
  Заперечення: застосовує стилі до всього, крім вказаного типу медіа.  
  `@media not print {...}`

---

#### 5. Логічні оператори (and, or, not)

- **and**  
  `@media screen and (min-width: 400px) and (max-width: 800px)`
- **or ( , )**  
  `@media screen and (max-width: 600px), (min-width: 900px)`
- **not**  
  `@media not print`

---

#### 6. Mobile-first підхід

Підхід, при якому спочатку створюється дизайн для мобільних пристроїв, а потім
поступово додається підтримка для більших екранів:

| Пристрій | Розмір екрана   |
| -------- | --------------- |
| Мобільні | 0 – 767px       |
| Планшети | 768 – 1023px    |
| Десктопи | 1024px і більше |

---

#### 7. Адаптивна графіка

Адаптивні зображення та фонові зображення, що змінюються залежно від роздільної
здатності екрану.

---

#### 8. Респонсивні зображення

```html
<img
  srcset="./img/photo.jpg 1x, ./img/photo@2x.jpg 2x"
  src="./img/photo.jpg"
  alt="Опис зображення для всіх версій"
/>
```

---

#### 9. Фонові зображення

```css
@media (min-resolution: 192dpi) {
  .box {
    background-image: url('photo@2x.png');
  }
}
```

> ⚠️ 96dpi — стандартна щільність. Для Retina/HiDPI — 192dpi (2x). 1x img
> (96dpi), 2x (192pdi), 3x (288dpi)

### 7. Адаптивна графіка

Адаптивні зображення та фонові зображення, що змінюються залежно від роздільної
здатності екрану.

---

#### 8. Респонсивні зображення

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

---

#### 9. Фонові зображення

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

#### 🔹 Додаткові ресурси 📚

- 🖼 [dashly-theme](https://dashly-theme.com/account.html) – приклад використання
  форм
- 🖼 [ant.design](https://ant.design/components/overview/) – одна з популярних js
  бібліотек з різними компонентами
- Особливості inline-block елементів -
  https://css-tricks.com/fighting-the-space-between-inline-block-elements/
- Повний посібник з Flexbox -
  https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Гра по Flexbox - http://flexboxfroggy.com/
- Ще одна гра на вивчення флексів https://mastery.games/flexboxzombies/
- Специфікація - https://developer.mozilla.org/en-US/docs/Web/CSS
- Слова, які часто використовуються в CSS-класах -
  https://github.com/YK911/basic-dictionary
- Плагін, який аналізує відразу всі шрифти макета
  https://www.youtube.com/watch?v=6nKQsgiNIFc
- Шукати плагін можна як у відео чи простіше: Головне меню Figma -> Plugins ->
  Manage plugins -> Font Fascia
- Посилання на довідник по HTML і CSS https://css.in.ua/
- https://cdnjs.com/libraries/modern-normalize

- 🖼 [Remove.bg](https://www.remove.bg/) – сервіс для видалення фону із зображень
- 🛠 [iLoveIMG](https://www.iloveimg.com/) – інструменти для обробки зображень
- ✅ [W3C Validator](https://validator.w3.org/) – перевірка HTML-коду на
  помилки -[CSS Validator](https://jigsaw.w3.org/css-validator/) - CSS validator
- 📖 [MDN HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) –
  офіційна документація HTML

- 🖼 [toptal.com](https://www.toptal.com/designers/htmlarrows/symbols/) –
  спеціальні символи
- 🛠 [Caninclude](https://caninclude.glitch.me/) – чи можу вкласти тег в інший
  тег
- 📖 [Emmet commands](https://docs.emmet.io/cheat-sheet/) – швидкі команди emmet
- 📖 [MDN HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) –
  офіційна документація

- 🛠 [Squoosh](https://squoosh.app/) – Оптимізація картинок (jpeg)
- 🛠 [Tiny PNG](https://tinypng.com/) – Оптимізація картинок (png)

- 📖
  [Figma Template](https://www.figma.com/design/LWMTodUscRGMcbTpxE3kgI/Simply-Chocolate?node-id=1-5060&t=FZ9D8VYSe7z6EkSG-0)
  – Figma

- [HTML reference](https://htmlreference.io/) - безкоштовний інтерактивний
  довідник з HTML від творців

- [netlify.com](https://www.netlify.com/) - Посилання на Netlify

- [pagespeed](https://pagespeed.web.dev/) - как ускорить загрузку своих страниц на любых устройствах.

- [favicon](https://favicon.io/favicon-converter/) - Favicon converter .svg, .ico + webmanifest.gson

---

#### 🧰 SVG-спрайт

- Генерація через: [icomoon.io/app](https://icomoon.io/app/)
- Оптимізація SVG: [svgomg.net](https://svgomg.net/)

- `<svg class="class-name" width="24" height="24">`
  `<use href="./sprite.svg#icon-instagram"></use>` `</svg>`

---
