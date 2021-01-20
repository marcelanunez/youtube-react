import React from 'react';
import { shallow } from 'enzyme';
import { SidebarItem } from '../SidebarItem';

describe('SidebarItem', () => {
  test('renders empty SidebarItem', () => {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders highlighted SidebarItem that navigates to /feed/trending', () => {
    const wrapper = shallow(
      <SidebarItem highlighted icon="fire" label="Trending" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('render non-highlighted SidebarItem that navigates to /feed/trending', () => {
    const wrapper = shallow(<SidebarItem icon="fire" label="Trending" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders highlighted SidebarItem with no navigation', () => {
    const wrapper = shallow(
      <SidebarItem highlighted icon="fire" label="Trending" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
