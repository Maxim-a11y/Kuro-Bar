import { paths } from './config.js';
import { init } from 'browser-sync';

export const browserSync = () => {
    init({
        server: { baseDir: paths.buildFolder },
        notify: false,
        port: 3000
    });
}