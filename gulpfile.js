const gulp = require('gulp')
const watch = require('gulp-watch')
const pug = require('gulp-pug')
const css = require('gulp-clean-css')
const rename = require('gulp-rename')
const del = require('del')

const paths = {
    templates: {
        src: 'views/*.pug',
        dest: 'build/'
    },
    styles: {
        src: 'styles/*.css',
        dest: 'build/styles/'
    },
    assets: {
        src: 'assets/*.{png,jpg}',
        dest: 'build/assets/'
    }
}

function styles() {
    return gulp.src(paths.styles.src)
    .pipe(css({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest(paths.styles.dest))
}

function views() {
    return gulp.src(paths.templates.src)
    .pipe(pug({
        pretty: false
    }))
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(paths.templates.dest))
}

function assets() {
    return gulp.src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dest))
}

function clean() {
    return del(['build/*.html', 'build/styles/*.css', 'build/assets/*'])
}

function watchBuild() {
    return watch([views.src, styles.src, 'copies/*'], build)
}

const build = gulp.series(clean, assets, styles, views)

exports.default = watchBuild
exports.build = build