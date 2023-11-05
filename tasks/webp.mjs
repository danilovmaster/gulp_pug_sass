import gulp from 'gulp';
const { src } = gulp;
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const webpConv = require('gulp-webp');
const changed = require ('gulp-changed');
const multiDest = require ('gulp-multi-dest');
const plumber = require ('gulp-plumber');
console.log(changed)
export default function webp() {
	return src('src/images/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('public/images', {
			extension: '.webp'
		}))
		.pipe(webpConv())
		.pipe(multiDest(['src/images', 'public/images']))
}