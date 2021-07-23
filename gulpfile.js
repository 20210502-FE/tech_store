const { dev, dest, parallel, series, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const browsersync = require('browser-sync');
const gulpCopy = require('gulp-copy');
const del = require('del');

var paths = {
    build: './build/',
    scss: './dev/scss/',
    pug: './dev/pug/',
    js: './dev/js/'
};

function templates() {
    return dev(paths.pug + 'pages/*.pug')
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(dest('build/'))
}

function css() {
    return dev('dev/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [paths.scss],
            outputStyle: 'expanded'
        }))
        .pipe(prefix(['last 15 versions','> 1%','ie 8','ie 7','iOS >= 9','Safari >= 9','Android >= 4.4','Opera >= 30'], {
            cascade: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'));
}

function js() {
    return dev(paths.js + '*.js')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));
}

function copyAssets() {
    return dev(['./dev/assets/**/*.*'],
        del(paths.build + 'assets/**/*'))
        .pipe(gulpCopy(paths.build + 'assets', { prefix: 2 }));
}

function copyFavicon() {
    return dev(['./dev/assets/favicons/*.ico'],
        del('build/'))
        .pipe(dest('build/'));
}


function browserReload () {
    return browsersync.reload;
}

function watchFiles() {
    watch(paths.scss + '**/*.scss', parallel(css))
        .on('change', browserReload());
    watch(paths.js + '*.js', parallel(js))
        .on('change', browserReload());
    watch([paths.pug + '**/*.pug'], parallel(templates))
        .on('change', browserReload());
    watch('dev/assets/**/*')
        .on('change', series(copyAssets, css, js, browserReload()));
}

function browserSync() {
    browsersync({
        server: {
            baseDir: paths.build
        },
        notify: false,
        browser: "google chrome",
    });
}

const watching = parallel(watchFiles, browserSync);

exports.js = js;
exports.css = css;
exports.build = parallel(copyAssets, copyFavicon, css, js, templates);
exports.watch = watching;
