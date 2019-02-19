// tslint:disable:no-import-side-effect no-invalid-this only-arrow-functions

import { generate } from 'shortid'
import 'vue'

declare module 'vue/types/vue' {
  export interface Vue {
    $$eids: string[]

    $eid(name: string): string
  }
}

const VueElemId = {
  install(V: any) {
    V.prototype.$$eids = []

    V.prototype.$eid = function $elemId(name: string) {
      if (this.$$eids[name] == null) {
        this.$$eids[name] = `eid${generate()}`
      }
      return this.$$eids[name]
    }
  },
}

export default VueElemId
