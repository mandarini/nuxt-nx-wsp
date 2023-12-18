import { mount } from '@vue/test-utils';
import Two from './two.vue';

describe('Two', () => {
  it('renders properly', () => {
    const wrapper = mount(Two, {});
    expect(wrapper.text()).toContain('Welcome to Two');
  });
});
