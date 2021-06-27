<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Parse JSON

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Parse a string as [JSON][json].

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-parse-json
```

</section>

<section class="usage">

## Usage

```javascript
var parseJSON = require( '@stdlib/utils-parse-json' );
```

#### parseJSON( str\[, reviver] )

Parses a `string` as [JSON][json].

```javascript
var out = parseJSON( '{"beep":"boop"}' );
// returns {'beep':'boop'}
```

If unable to parse a `string` as [JSON][json], the function returns an error.

```javascript
var out = parseJSON( 'beep' );
// returns <SyntaxError>
```

To transform the `string` being parsed, provide a `reviver`.

```javascript
function reviver( key, value ) {
    if ( key === '' ) {
        return value;
    }
    if ( key === 'beep' ) {
        return value;
    }
}

var str = '{"beep":"boop","a":"b"}';
var out = parseJSON( str, reviver );
// returns {'beep':'boop'}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the native [`JSON.parse()`][json-parse], this implementation throws a `TypeError` if provided **any** value which is not a `string`.

    ```javascript
    var out = JSON.parse( null );
    // returns null

    out = parseJSON( null );
    // throws <TypeError>
    ```

-   In contrast to the native [`JSON.parse()`][json-parse], this implementation does **not** throw a `SyntaxError` if unable to parse a `string` as [JSON][json].

    ```javascript
    var out = parseJSON( '{"beep":"boop}' );
    // returns <SyntaxError>

    out = JSON.parse( '{"beep":"boop}' );
    // throws <SyntaxError>
    ```

-   In contrast to the native [`JSON.parse()`][json-parse], this implementation throws a `TypeError` if provided a `reviver` argument which is **not** a `function`.

    ```javascript
    var out = JSON.parse( '{"a":"b"}', [] );
    // returns {'a':'b'}

    out = parseJSON( '{"a":"b"}', [] );
    // throws <TypeError>
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parseJSON = require( '@stdlib/utils-parse-json' );

var out;

out = parseJSON( '{"beep":"boop"}' );
// returns {'beep':'boop'}

out = parseJSON( '3.14' );
// returns 3.14

out = parseJSON( 'true' );
// returns true

out = parseJSON( 'null' );
// returns null

out = parseJSON( '{"beep":"boop}' );
// returns <SyntaxError>
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-parse-json.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-parse-json

[test-image]: https://github.com/stdlib-js/utils-parse-json/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-parse-json/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-parse-json/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-parse-json?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-parse-json.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-parse-json/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-parse-json/main/LICENSE

[json]: http://www.json.org/

[json-parse]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

</section>

<!-- /.links -->
