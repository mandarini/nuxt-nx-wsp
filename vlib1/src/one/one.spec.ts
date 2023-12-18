import { mount } from '@vue/test-utils';
import One from './one.vue';

describe('One', () => {
  it('renders properly', () => {
    const wrapper = mount(One, {});
    expect(wrapper.text()).toContain('Welcome to One');
  });
});
