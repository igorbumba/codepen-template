'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

gulp.task('HTML', function () {
	return gulp.src(['./template/header.html', './_index.html', './template/footer.html'])
		.pipe(concat({path: 'index.html'}))
		.pipe(gulp.dest('./'));
});

gulp.task('SASS', function () {
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

	gulp.watch('./index.scss', ['SASS']);
	gulp.watch('./*.html', ['HTML']).on('change', browserSync.reload);
	gulp.watch('./*.js').on('change', browserSync.reload);

});