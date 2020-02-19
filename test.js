#!/usr/bin/env node

import {strictEqual} from 'assert';
import esMain, {stripExt} from './main.js';
import testImport from './test-import.js';

strictEqual(testImport, true, 'import other module');
strictEqual(esMain(import.meta), true, 'run as main');

strictEqual(stripExt('/path/to/file.js'), '/path/to/file');
strictEqual(stripExt('/path/to/file'), '/path/to/file');
strictEqual(stripExt('/path.to/file.js'), '/path.to/file');
strictEqual(stripExt('/path.to/file'), '/path.to/file');
