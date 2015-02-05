var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha   = require('gulp-mocha-co');
var exit    = require('gulp-exit');

gulp.task('nodemon', function() {
  nodemon({
    script: 'index.js',
    nodeArgs: ['--harmony'],
    ignore: ["*.test.js"]
  }).on('restart');
});

gulp.task('default', ['nodemon', 'mocha', 'watch']);

// gulp.task('test-once', function() {
//   gulp.tasks.mocha.fn().pipe(exit());
// });

gulp.task('watch', function() {
  gulp.watch(['*.js', 'test/**/*.test.js'], ['mocha']);
});

gulp.task('mocha', function() {
  process.env.NODE_ENV = 'test';
  return gulp.src(['test/**/*.test.js']).pipe(mocha());
});
