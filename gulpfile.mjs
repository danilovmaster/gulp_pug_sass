import gulp from 'gulp';
const { series, parallel } = gulp;

// import dev_js from "./tasks/dev_js.mjs";
// import pages from "./tasks/pages.mjs";
// import raster from "./tasks/raster.mjs";
// import style from "./tasks/style.mjs";
// import svg_sprite from "./tasks/svg_sprite.mjs";
// import svg_css from "./tasks/svg_css.mjs";
import watching from "./tasks/watch.mjs";
import watching_expanded_style from "./tasks/watch-expanded.mjs";
// import webp from "./tasks/webp.mjs";

// export const js_dev = dev_js;
export const watcher = watching, watcher_expand = watching_expanded_style;
//export default series ( pages, raster, style, svg_css, svg_sprite, webp, watching );


