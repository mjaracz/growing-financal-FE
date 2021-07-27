import React from 'react';
import { render } from '@testing-library/react';
import { CustomAppBar } from '../CustomAppBar';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<CurrencySelect />', () => {
  it('should math the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <CustomAppBar />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})