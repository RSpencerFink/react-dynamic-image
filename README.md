# react-dynamic-image

A lightweight component for cleanly rendering srcSet images in react

`npm install --save react-dynamic-image`

Improve your website's loadtimes by using **DynamicImage**

To Start:

`import DynamicImage from 'react-dynamic-image'`

Place compressed images in same folder as original and name to these conventions.

**ImageName_ImageWidth.ext**

_default image widths are [400, 600, 800, 1100, 1500, 2000, 2500]px, but can be changed using the **imageWidths** prop and passing an array of integers_

![example file structure](https://i.imgur.com/GzCo7gO.png)

Include in jsx in place of image

```
<DynamicImage
    srcProp="/images/example.ext"
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
| imageWidths | Array - Optional Array of integers for custom image widths (replaces default array) |
| isPublic    | Boolean - Set true if images are located in the `public` folder                     |
| ariaHidden  | Boolean - Optional Hide from Accessibility software                                 |
| noStyles    | Boolean - Optionally disable default styles (max-height: 100%;, max-width: 100%;)   |

You can automate the image compression process using [ImageMagick](https://www.imagemagick.org/script/download.php) and adding these scripts to your `.bashrc` file

```
# Resize Multiple JPG's (Requires Filename as Argument)
# Resize Single JPG's = Provide Width as Second Argument

resizeJPG() {
  FILE_NAME=$1
  SIZES="400 600 800 1100 1500 2000 2500"
  BASE="${FILE_NAME%.*}"

  if [ "$#" -ne 2 ]
  then
    echo "Resizing Multiple Sized JPG's"
    for SIZE in $SIZES
    do
      NEW_FILE="${BASE}_${SIZE}.jpg"
      convert $1 -sampling-factor 4:2:0 -strip -resize $SIZE -quality 70 $NEW_FILE
      echo "Filename: $NEW_FILE, Width: $SIZE pixels"
    done
  else
    echo "Resizing Single Sized JPG"
    NEW_FILE="${BASE}_$2.jpg"
    convert $1 -sampling-factor 4:2:0 -strip -resize $2 -quality 70 $NEW_FILE
    echo "Filename: $NEW_FILE, Width: $2"
  fi
}

# Resize All JPG's = No Arguments

resizeALL(){
  for file in *.jpg; do
    if [ -f "$file" ]; then
        resizeJPG $file;
    fi
  done
}
```

Enjoy!

**To Do:**

- [x] Add support for filetypes beyond .jpg
- [ ] Add more event listener support
