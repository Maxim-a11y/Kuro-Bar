import { paths, plugins } from './config.js';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const img = () => {
    return plugins.gulp.src(paths.src.img)
    .pipe(newer(paths.dest.img))
    .pipe(plugins.if(paths.isBuild, webp()))
    .pipe(plugins.if(paths.isBuild, plugins.gulp.dest(paths.dest.img)))
    .pipe(plugins.if(paths.isBuild, plugins.gulp.src(paths.src.img)))
    .pipe(plugins.if(paths.isBuild, newer(paths.dest.img)))
    .pipe(plugins.if(paths.isBuild, imagemin()))
    .pipe(plugins.gulp.dest(paths.dest.img))
    .pipe(plugins.stream());
}