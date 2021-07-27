import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../Home';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<Home />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <Home />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})