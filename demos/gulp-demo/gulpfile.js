var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create(); 

gulp.task('hello', function() {
	return gulp.src('index.html')
		.pipe(gulp.dest('./assets'));
});

gulp.task('sass', function() {
	return gulp.src('./assets/sass/main.scss')
		.pipe(sass()) // run the sass gulp package
		.pipe(gulp.dest('./assets/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browsersync', function() {
	browserSync.init({ // start the server
		server: "./" // serve from the project root
	});
});

gulp.task('default', ['browsersync'], function() {
	gulp.watch('assets/sass/*.scss', ['sass']);
});