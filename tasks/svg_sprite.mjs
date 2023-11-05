import gulp from "gulp";
const {src, dest} = gulp;
import { createRequire} from "node:module";
const require = createRequire(import.meta.url);
import svgMin from 'gulp-svgmin';
const sprite = require('gulp-svg-sprite');

export default function svg_sprite() {
  return src('src/images/svg/*.svg')
    .pipe(svgMin({
      plugins: [
        'preset-default'
      ]
    }))
    .pipe(sprite({
      mode: {
        stack: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(dest('public/images/svg/'))
}
