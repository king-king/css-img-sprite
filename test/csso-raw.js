/**
 * Created by acer on 2017/2/8.
 */

var gulp = require( "gulp" );
var csso = require( "gulp-csso" );
var srpite = require( "../index" ).raw;


gulp.src( "css/base1/base.css" , { base : "css" } )
	.pipe( csso() )
	.pipe( gulp.dest( "csso-css" ) );
