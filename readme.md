# es-main

Test if an ES module is run directly with Node.js.  Acts as a replacement for `require.main`.

## use

```js
import esMain from 'es-main';

if (esMain(import.meta)) {
  // Module run directly.
}
```
