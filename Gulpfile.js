'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
	return gulp.src('./index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream({
			match: '*.css'
		}));
});

gulp.task('default', function () {

	browserSync.init({
		server: {
			baseDir: './'
		},
		online: true
	});

	gulp.watch('./index.scss', ['sass']);
	gulp.watch('./*.html').on('change', browserSync.reload);

});