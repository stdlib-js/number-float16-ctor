<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Float16

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> 16-bit half-precision floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Float16 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float16-ctor@esm/index.mjs';
```

#### Float16( value )

16-bit half-precision floating-point number constructor.

```javascript
var x = new Float16( 5.0 );
// returns <Float16>
```

* * *

## Properties

#### Float16.name

Static property returning the constructor name.

```javascript
var str = Float16.name;
// returns 'Float16'
```

#### Float16.BYTES_PER_ELEMENT

Size (in bytes) of the underlying value.

```javascript
var nbytes = Float16.BYTES_PER_ELEMENT;
// returns 2
```

#### Float16.prototype.BYTES_PER_ELEMENT

Size (in bytes) of the underlying value.

```javascript
var x = new Float16( 5.0 );

var nbytes = x.BYTES_PER_ELEMENT;
// returns 2
```

### Instance

A `Float16` instance has the following properties...

#### value

A **read-only** property returning the underlying value as a number.

```javascript
var x = new Float16( 5.0 );

var v = x.value;
// returns 5.0
```

* * *

## Methods

### Accessor Methods

These methods do **not** mutate a `Float16` instance and, instead return a half-precision floating-point number representation.

#### Float16.prototype.toString()

Returns a string representation of a `Float16` instance.

```javascript
var x = new Float16( 5.0 );
var str = x.toString();
// returns '5'

x = new Float16( -3.14 );
str = x.toString();
// returns '-3.140625'
```

#### Float16.prototype.toJSON()

Returns a [JSON][json] representation of a `Float16` instance. [`JSON.stringify()`][mdn-json-stringify] implicitly calls this method when stringifying a `Float16` instance.

```javascript
var x = new Float16( 5.0 );

var o = x.toJSON();
/*
  {
    "type": "Float16",
    "value": 5.0
  }
*/
```

To [revive][mdn-json-parse] a `Float16` number from a [JSON][json] `string`, see [@stdlib/number/float16/reviver][@stdlib/number/float16/reviver].

#### Float16.prototype.valueOf()

Converts a `Float16` instance to a primitive value.

```javascript
var x = new Float16( 5.0 );
var v = x.valueOf();
// returns 5.0

x = new Float16( 3.14 );
v = x.valueOf();
// returns 3.140625
```

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The underlying value is stored as a half-precision floating-point number [IEEE 754][ieee754] with 1 sign bit, 5 exponent bits, and 10 significand bits.
-   A half-precision floating-point number has a range of approximately `±6.55e4` and a precision of about 3-4 decimal digits.

</section>

<!-- /.notes -->

* * *

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float16 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float16-ctor@esm/index.mjs';

var x = new Float16( 3.14 );

console.log( 'type: %s', typeof x );
// => 'type: object'

console.log( 'str: %s', x );
// => 'str: 3.140625'

console.log( 'value: %d', x.value );
// => 'value: 3.140625'

console.log( 'JSON: %s', JSON.stringify( x ) );
// => 'JSON: {"type":"Float16","value":3.140625}'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float16-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float16-ctor

[test-image]: https://github.com/stdlib-js/number-float16-ctor/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/number-float16-ctor/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float16-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float16-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float16-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float16-ctor/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float16-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float16-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float16-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float16-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float16-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float16-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float16-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float16-ctor/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[json]: http://www.json.org/

[mdn-json-stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

[mdn-json-parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

[@stdlib/number/float16/reviver]: https://github.com/stdlib-js/number-float16-reviver/tree/esm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
