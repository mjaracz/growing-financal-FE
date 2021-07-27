import React from 'react';
import { render } from '@testing-library/react';
import { UnitTestWrapper } from 'common/UnitTestWrapper';
import { CurrencySelect } from '../CurrencySelect';

describe('<CurrencySelect />', () => {
  it('when pass correct props, should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <CurrencySelect 
          currenciesOptions={[]} 
          handleInputChange={jest.fn(() => {})} 
        />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})