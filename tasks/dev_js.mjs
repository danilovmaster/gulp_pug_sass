import gulp from "gulp";
const { src, dest } = gulp;
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');
const terser = require('gulp-terser');

export default function dev_js() {
  return src('src/index.js')
    .pipe(map.init())
    .pipe(concat('index.min.js'))
    .pipe(terser())
    .pipe(map.write('../soursemaps'))
    .pipe(dest('public'))
    .pipe(bs.stream())
}