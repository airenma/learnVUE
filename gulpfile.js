var gulp = require ('gulp'),
    less = require("gulp-less");

gulp.task('less', function(){
    return gulp.src('./styles/*less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function(){
    gulp.run('less');
    
    gulp.watch('.styles/**', function(event){
        gulp.run('less');
    })
})
