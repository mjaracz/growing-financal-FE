import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../Checkbox';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<Checkbox />', () => {
  it('when pass correct props should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <Checkbox checked={false} handleCheckboxChange={jest.fn(() => {})} />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  });
})