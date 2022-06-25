const gulp = require('gulp');
const { dest } = require('gulp');
const webp = require('gulp-webp');
const cache = require('gulp-cache');

const paths = {
	src: './src/**/*.+(png|jpg|jpeg|gif)',
	dist: './dist'
};

const webpTask = (done) => {
	gulp.src(paths.src)
		.pipe(cache(webp()))
		.pipe(dest(paths.dist));
	done();
};

module.exports = {
	default: webpTask
};