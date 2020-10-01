import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Currency from '@/views/Currency.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Currency, {})
    expect(wrapper.text()).to.include('Convert')
  })
})
