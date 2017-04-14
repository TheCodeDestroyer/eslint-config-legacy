# eslint-config-tcd [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```bash
npm install eslint-config-tcd
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```bash
npm install --save-dev eslint eslint-config-tcd 
```

Then, add this to your .eslintrc(.js|.json|.yml) file:

```
{
  "extends": "tcd"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### All available configs

* `tcd` - ES5 config
* `tcd/configs/esnext` - ESNext config
* `tcd/configs/node` - NodeJS ES5 config
* `tcd/configs/node-esnext` - NodeJS ESNext config
* `tcd/configs/ng` - AngularJS config; Requires [eslint-plugin-angular][eslint-plugin-angular]


[//]: # (URLs)

[//]: # (main)

[npm-image]: https://img.shields.io/npm/v/eslint-config-tcd.svg
[npm-url]: https://npmjs.org/package/eslint-config-tcd
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-tcd.svg
[downloads-url]: https://npmjs.org/package/eslint-config-tcd
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs

[//]: # (other)

[eslint-plugin-angular]: https://www.npmjs.com/package/eslint-plugin-angular