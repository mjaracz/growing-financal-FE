import React from 'react';
import { render } from '@testing-library/react';
import { DatePicker } from '../DatePicker';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<DatePicker />', () => {
  it('when pass correct props, should match snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <DatePicker saveDate={jest.fn(() => {})} selectedDate={new Date()} />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})
