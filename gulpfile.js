var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var minifycss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var scss_src = 'scss/**/*.scss';
var scss_dest = 'bundle/css/';

gulp.task('styles', function() {
    return gulp.src(scss_src)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifycss())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest(scss_dest));
});

gulp.task('watch', function() {
    gulp.watch(scss_src, gulp.series('styles'));
});

gulp.task('default', gulp.parallel('styles', 'watch'));