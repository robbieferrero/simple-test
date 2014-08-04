var gulp = require('gulp');
var karma = require('gulp-karma');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');

var testFiles = mainBowerFiles().concat([
  'js/*.js',
  'test/*.js'
]);


gulp.task('test', function() {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});