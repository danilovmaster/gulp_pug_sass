import gulp from 'gulp';
const {src, dest} = gulp;
import pug from 'gulp-pug';
import pugBem from 'gulp-pugbem';
import * as bs from 'browser-sync';
import { createRequire } from "node:module";
const require = createRequire(import.meta.url)
const concat = require('gulp-concat');

export default function pages(){
  return src('src/index.pug')
    .pipe(pug({
      pretty: true,
      plugins: [pugBem]
    }))
    .pipe(concat('index.html'))
    .pipe(dest('public/'))
    .pipe(bs.stream())
}