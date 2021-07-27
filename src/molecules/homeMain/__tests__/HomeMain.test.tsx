import React from 'react';
import { render } from '@testing-library/react';
import { HomeMain } from '../HomeMain';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<HomeMain />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <HomeMain />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})