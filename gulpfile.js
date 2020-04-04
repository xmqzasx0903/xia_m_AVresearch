var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

gulp.task("sass", function () {
    return gulp
        .src("assets/sass/**/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest("assets/css"))
});

gulp.task("watch", function () {
    gulp.watch("assets/sass/**/*.scss", gulp.series("sass"));
});

gulp.task('browser-sync', function () {
    browserSync.init(["assets/css/*.css", "assets/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});