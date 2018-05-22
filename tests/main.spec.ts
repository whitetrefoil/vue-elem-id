import Vue       from 'vue'
import VueElemId from '../src/main'

describe('common case', () => {
  it('should add custom properties and methods to Vue instance', () => {
    const TestVue = Vue.extend({})
    TestVue.use(VueElemId)
    const v = new TestVue()

    expect(v.$$eids).toEqual([])
    expect(typeof v.$eid).toBe('function')
  })

  it('should return different ids for different name', () => {
    const TestVue = Vue.extend({})
    TestVue.use(VueElemId)
    const v = new TestVue()

    const firstCall = v.$eid('test')
    const secondCall = v.$eid('test2')

    expect(firstCall).not.toEqual(secondCall)
  })

  it('should return same id for same name', () => {
    const TestVue = Vue.extend({})
    TestVue.use(VueElemId)
    const v = new TestVue()

    const firstCall = v.$eid('test')
    const secondCall = v.$eid('test')

    expect(firstCall).toEqual(secondCall)
  })
})
