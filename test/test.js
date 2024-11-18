#!/usr/bin/env node

import {strictEqual} from 'assert';
import esMain, {stripExt} from '../main.js';
import {testImport} from './import.js';

strictEqual(testImport, false, 'imported modules are not main');
strictEqual(esMain(import.meta), true, 'run as main');

strictEqual(stripExt('/path/to/file.js'), '/path/to/file');
strictEqual(stripExt('/path/to/file'), '/path/to/file');
strictEqual(stripExt('/path.to/file.js'), '/path.to/file');
strictEqual(stripExt('/path.to/file'), '/path.to/file');
