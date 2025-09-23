import { paths, plugins } from './config.js';
import webpack from 'webpack-stream';

export const js = () => {
    return plugins.gulp.src(paths.src.scripts, { sourcemaps: paths.isDev })
    .pipe(webpack({
        mode: paths.isBuild ? 'production' : 'development',
        entry: { index: './src/js/main.js' },
        output: { filename: 'main.min.js' },
        module: { 
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ] 
        }
    }))
    .pipe(plugins.gulp.dest(paths.dest.scripts))
    .pipe(plugins.stream());
}