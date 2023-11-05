const {src, dest} = require('gulp');
const changed = require('gulp-changed');
const imagemin = (...args) => import('gulp-imagemin').then(({default: fetch}) => fetch(...args));
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const bs = require('browser-sync');

module.exports = function raster() {
	return src('src/images/**/*.+(png|jpg|jpeg|gif|avif|svg|ico)')
    .pipe(changed('public/images'))
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
    },
[
      recompress({
        loops: 6,
        min: 50,
        max: 90,
        quality: "high",
        use: [pngquant({
          quality: [0.8, 1],
          strip: true,
          speed: 1
        })],
      })
      //imagemin.gifsicle(),
      //imagemin.optipng(),
      //imagemin.svgo()
    ], ), )
    .pipe(dest('public/images'))
    .pipe(bs.stream())
}