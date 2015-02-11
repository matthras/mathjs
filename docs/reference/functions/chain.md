---
layout: default
---

<h1 id="function-chain">Function chain <a href="#function-chain" title="Permalink">#</a></h1>

Wrap any value in a chain, allowing to perform chained operations on
the value.

All methods available in the math.js library can be called upon the chain,
and then will be evaluated with the value itself as first argument.
The chain can be closed by executing `chain.done()`, which returns
the final value.

The chain has a number of special functions:

- `done()`     Finalize the chain and return the chain's value.
- `valueOf()`  The same as `done()`
- `toString()` Executes `math.format()` onto the chain's value, returning
               a string representation of the value.


<h2 id="syntax">Syntax <a href="#syntax" title="Permalink">#</a></h2>

```js
math.chain(value)
```

<h3 id="parameters">Parameters <a href="#parameters" title="Permalink">#</a></h3>

Parameter | Type | Description
--------- | ---- | -----------
`value` | * | A value of any type on which to start a chained operation.

<h3 id="returns">Returns <a href="#returns" title="Permalink">#</a></h3>

Type | Description
---- | -----------
math.chaining.Chain | The created chain


<h2 id="examples">Examples <a href="#examples" title="Permalink">#</a></h2>

```js
math.chain(3)
    .add(4)
    .subtract(2)
    .done();     // 5

math.chain( [[1, 2], [3, 4]] )
    .subset(math.index(0, 0), 8)
    .multiply(3)
    .done();     // [[24, 6], [9, 12]]
```




<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->