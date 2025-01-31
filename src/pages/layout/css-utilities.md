---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'Global Stylesheets'
previousUrl: '/docs/layout/global-stylesheets'
nextText: 'Theming'
nextUrl: '/docs/theming/basics'
contributors:
  - brandyscarney
---

<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core@4.7.4/css/utils.bundle.css"/> -->

# CSSユーティリティ

Ionic Frameworは、テキストの順番を入れ替えたり、要素の配置やpaddingやmarginを修正する一連のユーティリティ属性を提供します。これは要素で使うことができます。

<blockquote>
  <p>
    If your app was not started using an available Ionic Framework starter, the stylesheets listed in the <a href="./global-stylesheets#optional">optional section of the global stylesheets</a> will need to be included in order for these styles to work.
  </p>
</blockquote>


## テキストの修正

### テキストの配置

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-start">
        <h3>text-start</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-end">
        <h3>text-end</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-center">
        <h3>text-center</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div class="ion-text-justify">
        <h3>text-justify</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-wrap">
        <h3>text-wrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-nowrap">
        <h3>text-nowrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Class               | Style Rule             | Description                                                                                                                                                         |
|---------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.ion-text-left`    | `text-align: left`     | The inline contents are aligned to the left edge of the line box.                                                                                                   |
| `.ion-text-right`   | `text-align: right`    | The inline contents are aligned to the right edge of the line box.                                                                                                  |
| `.ion-text-start`   | `text-align: start`    | The same as `text-left` if direction is left-to-right and `text-right` if direction is right-to-left.                                                                         |
| `.ion-text-end`     | `text-align: end`      | The same as `text-right` if direction is left-to-right and `text-left` if direction is right-to-left.                                                                         |
| `.ion-text-center`  | `text-align: center`   | The inline contents are centered within the line box.                                                                                                               |
| `.ion-text-justify` | `text-align: justify`  | The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. |
| `.ion-text-wrap`    | `white-space: normal`  | Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.              |
| `.ion-text-nowrap`  | `white-space: nowrap`  | Collapses whitespace as for `normal`, but suppresses line breaks (text wrapping) within text.                                                                       |


### テキストの変換

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-uppercase">
        <h3>text-uppercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-lowercase">
        <h3>text-lowercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-capitalize">
        <h3>text-capitalize</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Class                  | Style Rule                   | Description                                                         |
|------------------------|------------------------------|---------------------------------------------------------------------|
| `.ion-text-uppercase`  | `text-transform: uppercase`  | Forces all characters to be converted to uppercase.                 |
| `.ion-text-lowercase`  | `text-transform: lowercase`  | Forces all characters to be converted to lowercase.                 |
| `.ion-text-capitalize` | `text-transform: capitalize` | Forces the first letter of each word to be converted to uppercase.  |


### Responsive Text Classes

All of the text classes listed above have additional classes to modify the text based on the screen size. Instead of `text-` in each class, use `text-{breakpoint}-` to only use the class on specific screen sizes, where `{breakpoint}` is one of the breakpoint names listed in [Ionic Breakpoints](#ionic-breakpoints).

以下の表は、 `{modifier}` のデフォルトの挙動です。 `left`, `right`, `start`, `end`, `center`, `justify`, `wrap`, `nowrap`, `uppercase`, `lowercase`, `capitalize` は上記の通りです。

| Class                      | Description                                                         |
|----------------------------|---------------------------------------------------------------------|
| `.ion-text-{modifier}`     | Applies the modifier to the element on all screen sizes.            |
| `.ion-text-sm-{modifier}`  | Applies the modifier to the element when `min-width: 576px`.        |
| `.ion-text-md-{modifier}`  | Applies the modifier to the element when `min-width: 768px`.        |
| `.ion-text-lg-{modifier}`  | Applies the modifier to the element when `min-width: 992px`.        |
| `.ion-text-xl-{modifier}`  | Applies the modifier to the element when `min-width: 1200px`.       |


## 要素の配置

### Float要素

CSSプロパティのfloatは、テキストとインライン要素を囲んだ要素がそのコンテナの左側または右側に沿って配置することを指定します。 This way, the element is taken from the normal flow of the web page, though still remaining a part of the flow, contrary to absolute positioning.

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-float-left">
      <div>
        <h3>float-left</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col class="ion-float-right">
      <div>
        <h3>float-right</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class              | Style Rule                      | Description                                                                                               |
|--------------------|---------------------------------|-----------------------------------------------------------------------------------------------------------|
| `.ion-float-left`  | `float: left`                   | The element will float on the left side of its containing block.                                          |
| `.ion-float-right` | `float: right`                  | The element will float on the right side of its containing block.                                         |
| `.ion-float-start` | `float: left` / `float: right`  | The same as `float-left` if direction is left-to-right and `float-right` if direction is right-to-left.   |
| `.ion-float-end`   | `float: left` / `float: right`  | The same as `float-right` if direction is left-to-right and `float-left` if direction is right-to-left.   |


### Responsive Float Classes

All of the float classes listed above have additional classes to modify the float based on the screen size. Instead of `float-` in each class, use `float-{breakpoint}-` to only use the class on specific screen sizes, where `{breakpoint}` is one of the breakpoint names listed in [Ionic Breakpoints](#ionic-breakpoints).

The table below shows the default behavior, where `{modifier}` is any of the following: `left`, `right`, `start`, or `end`, as they are described above.

| Class                       | Description                                                         |
|-----------------------------|---------------------------------------------------------------------|
| `.ion-float-{modifier}`     | Applies the modifier to the element on all screen sizes.            |
| `.ion-float-sm-{modifier}`  | Applies the modifier to the element when `min-width: 576px`.        |
| `.ion-float-md-{modifier}`  | Applies the modifier to the element when `min-width: 768px`.        |
| `.ion-float-lg-{modifier}`  | Applies the modifier to the element when `min-width: 992px`.        |
| `.ion-float-xl-{modifier}`  | Applies the modifier to the element when `min-width: 1200px`.       |

## Element Display

The display CSS property determines if an element should be visible or not. The element will still be in the DOM, but not rendered, if it is hidden.

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-hide">
      <div>
        <h3>hidden</h3>
        You can't see me.
      </div>
    </ion-col>
    <ion-col>
      <div>
        <h3>not-hidden</h3>
        You can see me!
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class         | Style Rule                      | Description                                                                                               |
|---------------|---------------------------------|-----------------------------------------------------------------------------------------------------------|
| `.ion-hide`   | `display: none`                 | The element will be hidden.

### Responsive Display Attributes

There are also additional classes to modify the visibility based on the screen size. Instead of just `.ion-hide` for all screen sizes, use `.ion-hide-{breakpoint}-{dir}` to only use the class on specific screen sizes, where `{breakpoint}` is one of the breakpoint names listed in [Ionic Breakpoints](#ionic-breakpoints), and `{dir}` is whether the element should be hidden on all screen sizes above (`up`) or below (`down`) the specified breakpoint.

| Class                  | Description                                                                                                    |
|------------------------|--------------------------------------------------------------------------------------------------------------|
| `.ion-hide-sm-{dir}`   | Applies the modifier to the element when `min-width: 576px` (`up`) or `max-width: 576px` (`down`).            |
| `.ion-hide-md-{dir}`   | Applies the modifier to the element when `min-width: 768px` (`up`) or `max-width: 768px` (`down`).            |
| `.ion-hide-lg-{dir}`   | Applies the modifier to the element when `min-width: 992px` (`up`) or `max-width: 992px` (`down`).            |
| `.ion-hide-xl-{dir}`   | Applies the modifier to the element when `min-width: 1200px` (`up`) or `max-width: 1200px` (`down`).  |

## コンテンツのスペース

### 要素のPadding

padding属性は、要素のpaddingエリアを設定します。paddingエリアは、要素のコンテンツとその境界線のスペースです。

`padding` で適用されるデフォルトの数値は `16px` で、これは `--ion-padding`　変数で設定することができます。これらの値を変更する方法については [CSS Variables](/docs/theming/css-variables) をご覧ください。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-padding">
      <div>
        padding
      </div>
    </ion-col>
    <ion-col class="ion-padding-top">
      <div>
        padding-top
      </div>
    </ion-col>
    <ion-col class="ion-padding-start">
      <div>
        padding-start
      </div>
    </ion-col>
    <ion-col class="ion-padding-end">
      <div>
        padding-end
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-padding-bottom">
      <div>
        padding-bottom
      </div>
    </ion-col>
    <ion-col class="ion-padding-vertical">
      <div>
        padding-vertical
      </div>
    </ion-col>
    <ion-col class="ion-padding-horizontal">
      <div>
        padding-horizontal
      </div>
    </ion-col>
    <ion-col class="ion-no-padding">
      <div>
        no-padding
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Class                     | Style Rule               | Description                             |
|---------------------------|--------------------------|-----------------------------------------|
| `.ion-padding`            | `padding: 16px`          | Applies padding to all sides.           |
| `.ion-padding-top`        | `padding-top: 16px`      | Applies padding to the top.             |
| `.ion-padding-start`      | `padding-start: 16px`    | Applies padding to the start.           |
| `.ion-padding-end`        | `padding-end: 16px`      | Applies padding to the end.             |
| `.ion-padding-bottom`     | `padding-bottom: 16px`   | Applies padding to the bottom.          |
| `.ion-padding-vertical`   | `padding: 16px 0`        | Applies padding to the top and bottom.  |
| `.ion-padding-horizontal` | `padding: 0 16px`        | Applies padding to the left and right.  |
| `.ion-no-padding`         | `padding: 0`             | Applies no padding to all sides.        |


### 要素のMargin

Marginエリアは、隣り合う要素とのスペースを広げるために境界線の外に空のエリアをつくるためのものです。

`margin`　はデフォルトで `16px` が設定されており、 `--ion-margin` 変数で設定されています。 これらの値を変更する方法については [CSS Variables](/docs/theming/css-variables) をご覧ください。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-margin">
      <div>
        margin
      </div>
    </ion-col>
    <ion-col class="ion-margin-top">
      <div>
        margin-top
      </div>
    </ion-col>
    <ion-col class="ion-margin-start">
      <div>
        margin-start
      </div>
    </ion-col>
    <ion-col class="ion-margin-end">
      <div>
        margin-end
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-margin-bottom">
      <div>
        margin-bottom
      </div>
    </ion-col>
    <ion-col class="ion-margin-vertical">
      <div>
        margin-vertical
      </div>
    </ion-col>
    <ion-col class="ion-margin-horizontal">
      <div>
        margin-horizontal
      </div>
    </ion-col>
    <ion-col class="ion-no-margin">
      <div>
        no-margin
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Class                     | Style Rule               | Description                             |
|---------------------------|--------------------------|-----------------------------------------|
| `.ion-margin`             | `margin: 16px`           | Applies margin to all sides.            |
| `.ion-margin-top`         | `margin-top: 16px`       | Applies margin to the top.              |
| `.ion-margin-start`       | `margin-start: 16px`     | Applies margin to the left.             |
| `.ion-margin-end`         | `margin-end: 16px`       | Applies margin to the right.            |
| `.ion-margin-bottom`      | `margin-bottom: 16px`    | Applies margin to the bottom.           |
| `.ion-margin-vertical`    | `margin: 16px 0`         | Applies margin to the top and bottom.   |
| `.ion-margin-horizontal`  | `margin: 0 16px`         | Applies margin to the left and right.   |
| `.ion-no-margin`          | `margin: 0`              | Applies no margin to all sides.         |


## Flex プロパティ

<img src="/docs/assets/img/layout/diagram-flex-attributes.png"/>

### Flex コンテナのプロパティ


```html
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-end">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-around">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-between">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-evenly">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-baseline">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-stretch">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                          | Style Rule                       | Description                                                                 |
|--------------------------------|----------------------------------|-----------------------------------------------------------------------------|
| `.ion-justify-content-start`   | `justify-content: flex-start`    | Items are packed toward the start on the main axis.                         |
| `.ion-justify-content-end`     | `justify-content: flex-end`      | Items are packed toward the end on the main axis.                           |
| `.ion-justify-content-center`  | `justify-content: center`        | Items are centered along the main axis.                                     |
| `.ion-justify-content-around`  | `justify-content: space-around`  | Items are evenly distributed on the main axis with equal space around them. |
| `.ion-justify-content-between` | `justify-content: space-between` | Items are evenly distributed on the main axis.                              |
| `.ion-justify-content-evenly`  | `justify-content: space-evenly`  | Items are distributed so that the spacing between any two items is equal.   |
| `.ion-align-items-start`       | `align-items: flex-start`        | Items are packed toward the start on the cross axis.                        |
| `.ion-align-items-end`         | `align-items: flex-end`          | Items are packed toward the end on the cross axis.                          |
| `.ion-align-items-center`      | `align-items: center`            | Items are centered along the cross axis.                                    |
| `.ion-align-items-baseline`    | `align-items: baseline`          | Items are aligned so that their baselines align.                            |
| `.ion-align-items-stretch`     | `align-items: stretch`           | Items are stretched to fill the container.                                  |
| `.ion-nowrap`                  | `flex-wrap: nowrap`              | Items will all be on one line.                                              |
| `.ion-wrap`                    | `flex-wrap: wrap`                | Items will wrap onto multiple lines, from top to bottom.                    |
| `.ion-wrap-reverse`            | `flex-wrap: wrap-reverse`        | Items will wrap onto multiple lines, from bottom to top.                    |


### Flex Item のプロパティ

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-align-self-start">
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col class="ion-align-self-center">
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col class="ion-align-self-end">
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Class                      | Style Rule               | Description                                                                         |
|----------------------------|--------------------------|-------------------------------------------------------------------------------------|
| `.ion-align-self-start`    | `align-self: flex-start` | Item is packed toward the start on the cross axis.                                  |
| `.ion-align-self-end`      | `align-self: flex-end`   | Item is packed toward the end on the cross axis.                                    |
| `.ion-align-self-center`   | `align-self: center`     | Item is centered along the cross axis.                                              |
| `.ion-align-self-baseline` | `align-self: baseline`   | Item is aligned so that its baseline aligns with other item baselines.              |
| `.ion-align-self-stretch`  | `align-self: stretch`    | Item is stretched to fill the container.                                            |
| `.ion-align-self-auto`     | `align-self: auto`       | Item is positioned according to the parent's `align-items` value.                   |


## Ionic Breakpoints

Ionic uses breakpoints in media queries in order to style an application differently based on the screen size. The following breakpoint names are used in the utility classes listed above, where the class will apply when the width is met.

| Breakpoint Name  | Width       |
|------------------|-------------|
| `xs`             | `0`         |
| `sm`             | `576px`     |
| `md`             | `768px`     |
| `lg`             | `992px`     |
| `xl`             | `1200px`    |
