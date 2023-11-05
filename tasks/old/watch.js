const {watch, parallel, series} = require('gulp');

module.exports = function watching(){
  watch('src/pages/*.pug', parallel('pages'));
  watch('src/pages/*scss', parallel('style'));
  watch('src/img/**/*.+(svg|ico)', parallel('raster'));
  watch('src/img/**/*.+(png|jpg|jpeg|gif)', series('raster', 'webp'));
  watch('src/svg/css/**/*.svg', series('svg_css', 'style'));
  watch('src/svg/**/*.svg', series('svg_sprite', 'raster'));
}