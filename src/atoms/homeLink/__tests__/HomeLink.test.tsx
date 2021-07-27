import React from 'react';
import { render } from '@testing-library/react';
import { HomeLink } from '../HomeLink';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<HomeLink />', () => {
  it('when pass correct props, should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <HomeLink path='/exmaple/route' content='mock content' />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})