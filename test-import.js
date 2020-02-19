import {strictEqual} from 'assert';
import esMain from './main.js';

strictEqual(esMain(import.meta), false, 'not run as main');

export default true;
