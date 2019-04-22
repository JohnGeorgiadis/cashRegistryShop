// Load plugins
const browsersync = require("browser-sync").create();
const gulp = require("gulp");
const uglify = require("gulp-uglify");

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function (cb) {

  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
      .pipe(gulp.dest('./vendor/bootstrap'));

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
      .pipe(gulp.dest('./vendor/jquery'));

  cb();

});

gulp.task('scripts', function () {
  return gulp.src('./**/*.js')
  // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest('./vendor/js'))
});

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch("./css/*", browserSyncReload);
  gulp.watch("./**/*.html", browserSyncReload);
  gulp.watch("./**/*.js", browserSyncReload);
}

gulp.task("default", gulp.parallel('vendor'));

// dev task
gulp.task("dev", gulp.parallel(watchFiles, browserSync));
