/**
 * Created by acer on 2017/2/8.
 */

var gulp = require( "gulp" );
var csso = require( "gulp-csso" );
var sprite = require( "../index" ).sprite;


// gulp.src( "css/base1/base.css" , { base : "css" } )
// 	.pipe( csso() )
// 	.pipe( gulp.dest( "csso-css" ) );

sprite( {
	cssSrc : 'csso-css/base1/base.css' ,
	cssDesDir : 'out' ,
	imgDesDir : 'out'
} , function () {
	console.log( "end" );
} );
