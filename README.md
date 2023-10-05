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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Parse JSON

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Parse a string as [JSON][json].



<section class="usage">

## Usage

```javascript
import parseJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import parseJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-parse-json.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-parse-json

[test-image]: https://github.com/stdlib-js/utils-parse-json/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-parse-json/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-parse-json/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-parse-json?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-parse-json.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-parse-json/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-parse-json/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-parse-json/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-parse-json/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-parse-json/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-parse-json/main/LICENSE

[json]: http://www.json.org/

[json-parse]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

</section>

<!-- /.links -->
