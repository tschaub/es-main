#!/usr/bin/env node

import {strictEqual} from 'assert';
import esMain from './main.js';
// import testImport from './test-import.js';

// strictEqual(testImport, true, 'import other module');
strictEqual(esMain(import.meta), true, 'run as main');
