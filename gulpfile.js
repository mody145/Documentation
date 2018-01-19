var gulp 			= require('gulp'),
	livereload 		= require('gulp-livereload');


// Watch HTML
gulp.task('html_watch', function() {
	gulp.src('*.html')
		.pipe(livereload());
});

// Watch Css
gulp.task('css_watch', function() {
	gulp.src('css/*.css')
		.pipe(livereload());
});

// Watch Css
gulp.task('js_watch', function() {
	gulp.src('js/*.js')
		.pipe(livereload());
});

// Watch Task
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('*.html', ['html_watch']);
	gulp.watch('css/*.css', ['css_watch']);
	gulp.watch('js/*.js', ['js_watch']);
});

/* ----- gulp basic task ----- */

gulp.task('default', ['watch']);

/*--------------*/