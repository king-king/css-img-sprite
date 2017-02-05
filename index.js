/**
 * Created by king-king on 2017/2/5.
 */

var sprite = require( "./lib/css-img-sprite" );

/**
 *  arguments:
 *      content:{buffer} css file content
 *      obj:{object}
 *          obj.cssSrc:{string} although you give content,we still need file name,so,give us cssSrc
 *          [obj.cssDesDir]:{string} css output dir ,default:cssSrc.we do not write new css file for you,you need do it yourself.we need it because we need to change css background-image:url()
 *          [obj.imgDesDir]:{string} image output dir,default:cssSrc
 *          [obj.layout]:{string} "linear"(default)|"matrix".matrix will use bin-packing
 *          [obj.hash]:{boolean} add hash flag on sprite image
 *  return:
 *      content:{buffer} new css file content
 *
 **/

module.export = sprite;