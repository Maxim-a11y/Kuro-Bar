import { paths, plugins } from './config.js'

export const copy = () => {
    return plugins.gulp.src(paths.src.svg)
    .pipe(plugins.gulp.dest(paths.dest.img))
    .pipe(plugins.gulp.src(paths.src.fonts))
    .pipe(plugins.gulp.dest(paths.dest.fonts));
}