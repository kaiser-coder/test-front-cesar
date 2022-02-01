'use strict';

//Gulp Modules
const gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps');

function styles(cb) {
  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano({
      safe: true,
      minifyFontValues: { removeQuotes: false }
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))

  cb();
}

exports.styles = styles;