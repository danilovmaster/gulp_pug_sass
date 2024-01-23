import gulp from "gulp";
const { watch, parallel, series } = gulp;
import dev_js from "./dev_js.mjs";
import pages from "./pages.mjs";
import raster from "./raster.mjs";
import style_expanded from "./style_expanded.mjs";
import svg_sprite from "./svg_sprite.mjs";
import webp_function from "./webp.mjs";
export default function watching_expanded_style(){
  watch('src/**/*.pug', parallel(pages));
  watch('src/**/*.scss', parallel(style_expanded));
  watch('src/**/*.js', parallel(dev_js));
  watch('src/images/**/*.+(png|jpg|jpeg|gif)', series(raster, webp_function));
  watch('src/images/svg/*.svg', series(raster, svg_sprite));
}