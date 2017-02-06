# TABLE
1. [Install](#INSTALL)
1. [Gulp Version](#Gulp Version)
1. [How To Write CSS](#How To Write CSS)
1. [How To Write JS](#How To Write JS)
1. [Example](#Example)



# <a name="Install">Install</a>
> npm install css-img-sprite

# <a name="Gulp Version">Gulp Version</a>
* Gulp : [gulp-css-img-sprite](https://github.com/king-king/gulp-css-img-sprite)

# <a name="How To Write CSS">How To Write CSS</a>
shop:
![shop](test/image/shop.png)
bag:
![shop](test/image/bag.png)

* add **'?__sprite'** or **'?__spriter'** at the end of url to do sprite:
```css
.image1 {
    margin: 10px;
    width: 100px;
    height: 30px;
    background: url("test/image/shop.png?__spriter") 0 0;
    border: 3px solid black;
}
.image2 {
    margin: 10px;
    width: 50px;
    background: url("test/image/bag.png?__spriter") 0 0;
    height: 50px;
    border: 3px solid black;
}
```
after sprite:
![after](test/image/base_f4aff81c22_z.png)

* you can scale the image by set background-size.we can put the same scale
 images into one output image.
  
* you can not use repeat,repeat-x or repeat-y with scale!=1,for example: you scale
 the image 2 times and you also use repeat-x,as a result, although you add '?__spriter',you will
 not get sprite image.
 ```css
 .image {
     width: 70px;
     background: url("test/image/bag.png?__spriter") repeat-x 0 200px;
     background-size: 100px auto;
     height: 10px;
 }
 ```
 you can write css like this:
 ```css
  .image {
      width: 70px;
      background: url("test/image/bag.png?__spriter") repeat-x 0 200px;
      background-size: 50px auto;
      height: 10px;
  }
  /*or*/
   .image2 {
       width: 70px;
       background: url("test/image/bag.png?__spriter") repeat-x 0 200px;
       height: 10px;
   }
```

* you can use auto to set background-size
```css
.image1 {
    background: url("test/image/bag.png?__sprite") 0 0;
    background-size: auto 50px;
}
/* or */
.image1 {
    background: url("test/image/bag.png?__sprite") 0 0;
    background-size: 50px 50px;
}
/* or */
.image1 {
    background: url("test/image/bag.png?__sprite") 0 0;
    background-size: auto auto;
}
```

# <a name="How To Write JS">How To Write JS</a>

* API:
    1. **raw ( content , spriteObj )**
    1. **sprite ( spriteObj , callback )**
    1. **spriteSync ( spriteObj )**
    
* Arguments Guide
```javascript
/**
 *  arguments:
 *      content:{buffer} css file content
 *      spriteObj:{object}
 *          spriteObj.cssSrc:{string} although you give content,we still need file name,so,give us cssSrc
 *          [spriteObj.cssDesDir]:{string} css output dir ,default:cssSrc.we do not write new css file for you,
 *                                             you need do it yourself.we need it because we need to change
 *                                             css background-image:url()
 *          [spriteObj.imgDesDir]:{string} image output dir,default:cssSrc
 *          [spriteObj.layout]:{string} "linear"(default)|"matrix".matrix will use bin-packing
 *          [spriteObj.hash]:{boolean} add hash flag on sprite image
 *      callback:{function} callback(err)
 *  return:
 *      content:{buffer} new css file content
 *
 **/
```
> **raw** is a low level api.you need to read css content and write new css file. 

# <a name="Example">Example</a>

> you can see the usage in test folder