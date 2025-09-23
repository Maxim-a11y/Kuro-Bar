import { paths } from './config.js';
import { deleteAsync } from 'del';

export const reset = () => {
    return deleteAsync([paths.buildFolder]);
}