var gulp = require('gulp'); //uses a library instead of running everything ourselves
var less = require('gulp-less');
var watch =  require('gulp-watch');

gulp.task('watch', function(){
	gulp.watch(['./public/styles/*.less'], ['compile-less'])
})

gulp.task('compile-less', function(){
	gulp.src('./public/styles/*.less')
	.pipe(less())//goes into a pipe and converts less to css!!!!!//
	.pipe(gulp.dest('./public/styles/'))
})

//DEFAULT TASK!!!//
gulp.task('default', ['compile-less', 'watch']) 