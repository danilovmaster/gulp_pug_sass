import gulp from "gulp";
const {	src, dest } = gulp;
import svgMin from 'gulp-svgmin';
import {createRequire} from "node:module";
const require = createRequire(import.meta.url)
const svgCss = require('gulp-svg-css-pseudo');

export default function svg_css() {
	return src('src/images/*.svg')
		.pipe(svgMin({
			plugins: [{
					removeComments: true
				},
				{
					removeEmptyContainers: true
				}
			]
		}))
		.pipe(svgCss({
			fileName: '_svg',
			fileExt: 'scss',
			cssPrefix: '--svg__',
			addSize: false
		}))
		.pipe(dest('src/scss/global'))
}