import gulp from 'gulp';
const { src } = gulp;
import webp from 'gulp-webp';
import changed from 'gulp-changed';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const multiDest = require ('gulp-multi-dest');
const plumber = require ('gulp-plumber');
console.log(changed)
export default function webp_function() {
	return src('src/images/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('public/images', {
			extension: '.webp'
		}))
		.pipe(webp())
		.pipe(multiDest(['src/images', 'public/images']))
}