import React from 'react';
import { shallow } from 'enzyme';
import { SidebarHeader } from '../SideBarHeader';

describe('SidebarHeader', () => {
  test('renders SidebarHeader with props.title=null', () => {
    const wrapper = shallow(<SidebarHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders SidebarHeader with props.title=''", () => {
    const wrapper = shallow(<SidebarHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders SidebarHeader with sample title', () => {
    const wrapper = shallow(<SidebarHeader title="Sample Title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
