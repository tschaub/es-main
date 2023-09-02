import esMain from '../../main.js';
import {strictEqual} from 'assert';

strictEqual(esMain(import.meta), true, 'run as main');
