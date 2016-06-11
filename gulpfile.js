var gulp = require('gulp')
var jasmine = require('gulp-jasmine')
var ts = require('gulp-typescript')
var runSequence = require('run-sequence')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('compile', function () {
  var tsResult = tsProject.src()
    .pipe(ts(tsProject))

  return tsResult.js.pipe(gulp.dest('release'))
})

gulp.task('test', function () {
  return gulp.src('release/**/*.specs.js')
    .pipe(jasmine())
})

gulp.task('default', function () {
  runSequence('compile', 'test')
})

gulp.task('watch', ['default'], function () {
  gulp.watch('src/**/*.ts', ['default'])
})
