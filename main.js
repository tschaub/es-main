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
 * Check if a module was run directly with node as opposed to being
 * imported from another module.
 * @param {ImportMeta} meta The `import.meta` object.
 * @return {boolean} The module was run directly with node.
 */
export default function esMain(meta) {
  const scriptPath = process.argv[1];
  if (!meta || !scriptPath) {
    return false;
  }

  const modulePath = fileURLToPath(meta.url);

  const extension = path.extname(scriptPath);
  if (extension) {
    return modulePath === scriptPath;
  }

  return stripExt(modulePath) === scriptPath;
}
