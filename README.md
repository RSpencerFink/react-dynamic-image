# react-dynamic-image

A lightweight component for cleanly rendering srcSet images in react

`npm install --save react-dynamic-image`

Improve your website's loadtimes by using **DynamicImage**

To Start:

`import DynamicImage from 'react-dynamic-image'`

Place compressed images in same folder as original and name to these conventions.

**ImageName_ImageWidth.jpg**

> ie: _portrait_400.jpg_

_default image widths are [400, 600, 800, 1100, 1500, 2000, 2500]px, but can be changed using the **imageWidths** prop and passing an array of integers_

![example file structure](https://i.imgur.com/GzCo7gO.png)

Include in jsx in place of image _leave off .jpg_

```
<DynamicImage
    srcProp="/images/example"
    altProp="example image"
/>
```

**Props**

| Prop Name   | Type - Description                                                                  |
| ----------- | ----------------------------------------------------------------------------------- |
| srcProp     | String (**Required**) - Path to images                                              |
| altProp     | String (**Required**) - Alt Text                                                    |
| classProp   | String - Optional Classname                                                         |
| onClickProp | Function - Optional onClick callback                                                |
| refProp     | Ref - Optional Ref                                                                  |
| ariaHidden  | Boolean - Optional Hide from Accessibility software                                 |
| imageWidths | Array - Optional Array of integers for custom image widths (replaces default array) |
| noStyles    | Boolean - Optionally disable default styles (max-height: 100%;, max-width: 100%;)   |
