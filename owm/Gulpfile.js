var gulp = require('gulp'); 
var connect = require('gulp-connect');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var usemin = require('gulp-usemin');

gulp.task('copy-html-files', function() {
     gulp.src(['./app/**/*.gif','./app/**/*.html', './app/owm-cities.json', '!./app/index.html'], {base: './app'})
    .pipe(gulp.dest('build/'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'build/', //Our application code will live inside of app/
        port: 8888
    });
});

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      js: [uglify({ mangle:false }), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['copy-html-files', 'usemin']);