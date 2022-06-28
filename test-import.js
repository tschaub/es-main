import esMain from './main.js';
import {strictEqual} from 'assert';

strictEqual(esMain(import.meta), false, 'not run as main');

export default true;
