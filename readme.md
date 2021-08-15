# es-main

Test if an [ES module](https://nodejs.org/api/esm.html) is run directly with Node.js.  Acts as a replacement for `require.main`.

## use

```js
import esMain from 'es-main';

if (esMain(import.meta)) {
  // Module run directly.
}
```

## Tree Shake

For an esm library available for browser, also provide cli.

You may want to completely tree-shake away command line only code.
```js
// library code

/* @__PURE__ */ (async () => {
    // command line only code
    const esMain = (await import('es-main')).default;
    if (esMain(import.meta)) {
        // command line only main code
    }
})();
```

Output from bundler such as rollup.
```js
// library code
```

<details>
  <summary>Vscode snippet</summary>
  <p>
 
```json
    "esMain": {
        "scope": "typescript,javascript",
        "description": "esMain",
        "prefix": "esMain",
        "body": [
            "/* @__PURE__ */ (async () => {",
            "    const esMain = (await import('es-main')).default;",
            "    if (esMain(import.meta)) {",
            "        ${0}",
            "    }",
            "})();",
        ]
    },
```
  </p>
</details>

## why?

It can be useful to have a module that is both imported from other modules and run directly.  With CommonJS, it is possible to have a top-level condition that checks if a script run directly like this:

```js
if (require.main === module) {
  // Do something special.
}
```

With ES modules in Node.js, `require.main` is [not available](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_no_require_exports_module_exports_filename_dirname).  Other alternatives like `process.mainModule` and `module.parent` are also not defined for ES modules.  In the future, there may be [an alternative way](https://github.com/nodejs/modules/issues/274) to do this check (e.g. `import.meta.main` or a special `main` export).  Until then, this package provides a workaround.
