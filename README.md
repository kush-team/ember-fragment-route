[![DeepScan grade](https://deepscan.io/api/teams/13691/projects/16700/branches/363420/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=13691&pid=16700&bid=363420)

# ember-fragment-route

A simple way to use anchors in Ember JS

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-fragment-route
```

## Usage
Template
Link
```
  <Fragment-Link @hash="test" @path="/" @activeClass="active" @title="test" />
  <Fragment-Link @hash="test2" @path="/" @activeClass="active" @title="test 2" />
  <Fragment-Link @hash="test3" @path="/" @activeClass="active" @title="test 3" />

```
Template Fragment
```
<Fragment @hash="test" class="content full-h">
  <p>Test 1</p>
</Fragment>

<Fragment @hash="test2" class="content full-h">
  <p>test 2</p>
</Fragment>

<Fragment @hash="test3" class="content full-h">
  <p>test 3</p>
</Fragment>
```

Route
```
import FragmentRoute from 'ember-fragment-route/routes/fragment-route';

export default class SomeRoute extends FragmentRoute {

}

```

See the [Demo](https://ember-fragment-route.vercel.app/)

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
