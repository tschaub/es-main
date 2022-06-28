import path from 'path';
import process from 'process';
import {fileURLToPath} from 'url';

/**
 * Strip the extension from a filename if it has one.
 * @param {string} name A filename.
 * @return {string} The filename without a path.
 */
export function stripExt(name) {
  const extension = path.extname(name);
  if (!extension) {
    return name;
  }

  return name.slice(0, -extension.length);
}

/**
 * @param {ImportMeta} meta The import meta object.
 * @return {boolean} The module is the main module.
 */
export default function (meta) {
  const modulePath = fileURLToPath(meta.url);

  const scriptPath = process.argv[1];
  const extension = path.extname(scriptPath);
  if (extension) {
    return modulePath === scriptPath;
  }

  return stripExt(modulePath) === scriptPath;
}
