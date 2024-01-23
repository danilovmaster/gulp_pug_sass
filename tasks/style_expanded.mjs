import gulp from "gulp";
const {src, dest} = gulp;
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );
import autoprefixer from 'gulp-autoprefixer';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const bulk = require('gulp-sass-bulk-importer');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

export default function style_expanded() {
  return src('src/**/*.scss')
    .pipe(map.init())
    .pipe(bulk())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions'],
      browsers: [
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 11',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    }))
    //.pipe(clean({
		//	level: 0
		//}))
		.pipe(concat('style.expanded.css'))
    .pipe(map.write('../soursemaps/'))
    .pipe(dest('public/'))
  .pipe(bs.stream())
}
