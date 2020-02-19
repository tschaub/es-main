import {fileURLToPath} from 'url';
import process from 'process';
import path from 'path';

export function stripExt(name) {
  const extension = path.extname(name);
  if (!extension) {
    return name;
  }

  return name.slice(0, -extension.length);
}

export default function(meta) {
  const modulePath = fileURLToPath(meta.url);
  const scriptPath = process.argv[1];
  return stripExt(modulePath) === stripExt(scriptPath);
}
