@whitetrefoil/vue-elem-id
==========

[![Build Status](https://travis-ci.org/whitetrefoil/vue-elem-id.svg?branch=master)](https://travis-ci.org/whitetrefoil/vue-elem-id) [![npm version](https://badge.fury.io/js/%40whitetrefoil%2Fvue-elem-id.svg)](https://badge.fury.io/js/%40whitetrefoil%2Fvue-elem-id)

A tiny plugin to help generate dynamic element ID in Vue.
Useful with labels and form inputs.

Usage
-----

```typescript
import VueElemId from '@whitetrefoil/vue-elem-id'
import Vue from 'vue'

Vue.use(VueElemId)
```

```html
<template>
    <form>
        <label :for="$eid('username')>Username:</label>
        <input :id="$eid('username')/>
    </form>
</template>
```

Changelog
---------

### v2.0.0

* Prefix with "eid" to prevent IDs start with digit.
* Migrate to yarn.
* Upgrade some dependencies.

### v1.1.0

* Add LICENSE file to publish this in proper license.
* Add Travis CI.

### v1.0.0

* Initial release.
