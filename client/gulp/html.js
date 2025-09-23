import { paths, plugins } from './config.js';
import htmlclean from 'gulp-htmlclean';
import webphtml from 'gulp-webp-html-nosvg';

export const html = () => {
    return plugins.gulp.src(paths.src.html)
    .pipe(plugins.if(paths.isBuild, webphtml()))
    .pipe(plugins.if(paths.isBuild, htmlclean()))
    .pipe(plugins.gulp.dest(paths.dest.html))
    .pipe(plugins.stream());
}
