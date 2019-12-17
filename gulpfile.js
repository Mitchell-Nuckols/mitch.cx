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
    viewStyles: {
        src: 'styles/**/*.css',
        dest: 'build/styles/'
    },
    assets: {
        src: 'assets/*.jpg',
        dest: 'build/assets/'
    }
}

function viewStyles() {
    return gulp.src(paths.viewStyles.src)
    .pipe(css({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest(paths.viewStyles.dest))
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
    return del(['build/*.html', 'build/styles/*.css', 'build/assets/*.md'])
}

function watchBuild() {
    return watch(['styles/*.css', 'views/**/*.pug', 'assets/'], build)
}

const build = gulp.series(clean, assets, viewStyles, views)

exports.default = watchBuild
exports.build = build