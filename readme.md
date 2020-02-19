# es-main

Test if an [ES module](https://nodejs.org/api/esm.html) is run directly with Node.js.  Acts as a replacement for `require.main`.

## use

```js
import esMain from 'es-main';

if (esMain(import.meta)) {
  // Module run directly.
}
```

## why?

It can be useful to have a module that is both imported from other modules and run directly.  With CommonJS, it is possible to have a top-level condition that checks if a script run directly like this:

```js
if (require.main === module) {
  // Do something special.
}
```

With ES modules in Node.js, `require.main` is not available.  Other alternatives like `process.mainModule` and `module.parent` are also not defined for ES modules.  In the future, there may be an alternative way to do this check (e.g. `import.meta.main` or a special `main` export).  Until then, this package provides a workaround.
