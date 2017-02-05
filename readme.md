#API

```javascript
/**
 *  arguments:
 *      content:{buffer} css file content
 *      obj:{object}
 *          obj.cssSrc:{string} although you give content,we still need file name,so,give us cssSrc
 *          [obj.cssDesDir]:{string} css output dir ,default:cssSrc.we do not write new css file for you,
 *                                             you need do it yourself.we need it because we need to change
  *                                             css background-image:url()
 *          [obj.imgDesDir]:{string} image output dir,default:cssSrc
 *          [obj.layout]:{string} "linear"(default)|"matrix".matrix will use bin-packing
 *          [obj.hash]:{boolean} add hash flag on sprite image
 *  return:
 *      content:{buffer} new css file content
 *
 **/
```


# HOW TO WRITE CSS
* add '?__spriter'or'?__sprite' at the end of url to do sprite:
```css
.image {
    width: 70px;
    background: url("test/image/2.png?__spriter") 0 200px;
    background-size: 70px auto;
    height: 10px;
}
```

* you can scale the image by set background-size.we can generate the same scale
 images into one output image.
  
* you can not use repeat,repeat-x or repeat-y with scale!=1,for example: you scale
 the image 2 times and you use repeat-x,so although you add '?__spriter',we will
 not generate sprite image.
 ```css
 .image {
     width: 70px;
     background: url("test/image/2.png?__spriter") repeat-x 0 200px;
     background-size: 140px auto;
     height: 10px;
 }
 ```
 
 * you can write css like this:
  ```css
  .image {
      width: 70px;
      background: url("test/image/2.png?__spriter") repeat-x 0 200px;
      background-size: 70px auto;
      height: 10px;
  }
  /*or*/
   .image2 {
       width: 70px;
       background: url("test/image/2.png?__spriter") repeat-x 0 200px;
       height: 10px;
   }
```

#HOW TO WRITE JS 
```javascript
fs.readFile( 'css/base1/base.css' , function ( err , buffer ) {
	var time = new Date();
	if ( err ) {
		console.log( err );
	} else {
		var content = sprite( buffer , {
			cssSrc : 'css/base1/base.css' ,
			cssDesDir : 'out' ,
			imgDesDir : 'out' ,
			hash : true
		} );
		fs.writeFile( 'out/result.css' , content , function ( err ) {
			if ( err ) {
				console.log( err );
			} else {
				console.log( 'finished ,spend ' + (new Date() - time) + 'ms' )
			}
		} );
	}
} );
```
> you can run test/test1.js to see result