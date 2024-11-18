import {strictEqual} from 'assert';
import esMain from '../../main.js';

strictEqual(esMain(import.meta), true, 'run as main');
