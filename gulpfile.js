var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');

var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('default', function() {

});

gulp.task('less', function() {

  // Minified version
  gulp.src('./dist/less/emmet.less')
    .pipe(less({
      plugins: [autoprefix, cleancss],
      paths: [ './dist/less' ]
    }))
    .pipe(rename('emmet.min.css'))
    .pipe(gulp.dest('./dist/css'));

  // Non-minified version
  gulp.src('./dist/less/emmet.less')
    .pipe(less({
      plugins: [autoprefix],
      paths: [ './dist/less' ]
    }))
    .pipe(gulp.dest('./dist/css'));
});