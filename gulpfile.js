'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
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
        .pipe(gulp.dest('js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('js'));
});

// Static Server + watching scss/html files
gulp.task('serve', [ 'js-vendor', 'sass'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch(["scss/*.scss"], ['sass']);
    gulp.watch(thirdPartyJavaScriptList, ['js-vendor']);
    gulp.watch([
        "*.html",
        "js/*.js"
    ]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);