var gulp = require('gulp');
var karma = require('gulp-karma');

var testFiles = [
	'bower_components/angular/angular.min.js',
	'bower_components/angular-mocks/angular-mocks.js',
	'js/*.js',
	'test/*.js'
];

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