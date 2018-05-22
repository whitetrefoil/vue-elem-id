@whitetrefoil/vue-elem-id
==========

[![Build Status](https://travis-ci.org/whitetrefoil/vue-elem-id.svg?branch=master)](https://travis-ci.org/whitetrefoil/vue-elem-id)

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

### v1.0.0

* Initial release.
