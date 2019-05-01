# GIOŚ API JavaScript Wrapper

### Install

`yarn add gios-api`

or

`npm install gios-api`

### Import and use

```javascript
import GIOS_API from "gios-api";

const giosAPI = new GIOS_API();
const stations = await giosAPI.findAll();
```