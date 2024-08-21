```bash
$ npm i node-input-t
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { InputValue } from "node-input-t";
```

If you use `require` for importing, **only default export is available**:

```js
const { InputValue } = require("node-input-t");
```

```js
const getinput = async () => {
  const name = await InputValue("Enter your name");
  console.log(name);
};
getinput();
```
