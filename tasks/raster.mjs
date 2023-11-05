import gulp from 'gulp';
const { src, dest } = gulp;
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const changed = require ('gulp-changed');
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const bs = require('browser-sync');

export default function raster() {
	return src('src/images/**/*.+(png|jpg|jpeg|gif|avif|svg|ico)')
    //.pipe(changed('public/images'))
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
      }),
      gifsicle({interlaced: true}),
      optipng(),
      svgo()
    ], ), )
    .pipe(dest('public/images'))
    .pipe(bs.stream())
}