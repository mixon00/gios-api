# GIOŚ API JavaScript Wrapper

**gios-api** is JavaScript wrapper of [GIOŚ API](https://powietrze.gios.gov.pl/pjp/content/api)

[![npm](https://img.shields.io/npm/v/gios-api.svg)][npm-link]
[![license](https://img.shields.io/github/license/mixon00/gios-api.svg)][mit-license]
[![donation](https://img.shields.io/badge/donate-PayPal-blue.svg)][paypal-donation]
![github](https://img.shields.io/github/stars/mixon00/gios-api.svg?style=social)
[![twitter](https://img.shields.io/twitter/follow/mixon00.svg?&style=social)][twitter-url]

<!-- [![npm](https://img.shields.io/npm/dm/gios-api.svg)][npm-link] -->

## Install

### Yarn

```sh
yarn add gios-api
```

### Npm

```sh
npm install gios-api
```

## Import and use

```javascript
import { GIOS_API } from "gios-api";

const giosAPI = new GIOS_API();
const stations = await giosAPI.findAll();
```

## Documentation

Browse the [online documentation here.](https://mixon00.github.io/gios-api/)

## Copyright and license

Code copyright 2019 Mateusz Misztoft. Code released under [the MIT license][mit-license].

[mit-license]: https://github.com/mixon00/gios-api/blob/master/LICENSE
[npm-link]: https://www.npmjs.com/package/gios-api
[twitter-url]: https://twitter.com/mixon00
[paypal-donation]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G9TMAD3S3W9EY&source=url