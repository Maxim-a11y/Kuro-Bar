import { watch, series, parallel } from 'gulp';
import { paths } from './gulp/config.js';

import { browserSync } from './gulp/browsersync.js';
import { reset } from './gulp/reset.js';
import { html } from './gulp/html.js';
import { css } from './gulp/css.js';
import { js } from './gulp/js.js';
import { img } from './gulp/img.js';
import { copy } from './gulp/copy.js';
import { applyFonts } from './gulp/fontsapplyer.js';

const watcher = () => {
    watch(paths.watch.html, html)
    watch(paths.watch.styles, css);
    watch(paths.watch.scripts, js);
    watch(paths.watch.img, img);
    watch(paths.watch.svg, copy);
    watch(paths.watch.fonts, copy);
}

const dev = series(reset, applyFonts, parallel(html, css, js, img, copy), parallel(watcher, browserSync)); 
const build = series(reset, applyFonts, parallel(html, css, js, img, copy)); 

export { dev, build };