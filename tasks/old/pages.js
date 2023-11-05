const {src, dest} = require('gulp');
const pug = require('gulp-pug');
const pugBem = require('gulp-pugbem');
const bs = require('browser-sync');

module.exports = function page(){
  return src('src/components/*.pug')
    .pipe(pug({
      pretty: true,
      //plugins: [pugBem]
    }))
    .pipe(dest('public/'))
    .pipe(bs.stream())
}