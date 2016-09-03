'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');


var thirdPartyJavaScriptList = [
    "bower_components/jquery/dist/jquery.js",
    "bower_components/angular/angular.js",
    "bower_components/bootstrap-sass/assets/javascripts/bootstrap.js"
];


gulp.task('js-vendor', function(){
    return gulp.src(thirdPartyJavaScriptList)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/js'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("public/scss/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("public/css"));
});

gulp.task('create', ['js-vendor', 'sass']);

gulp.task('default', ['create']);