import React from 'react';
import { render } from '@testing-library/react';
import { HomeHeader } from '../HomeHeader';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<HomeHeader />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <HomeHeader />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
