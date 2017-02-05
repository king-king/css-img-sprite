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

#useage

#example
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