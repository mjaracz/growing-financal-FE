import React from 'react';
import { render } from '@testing-library/react';
import { SubmitButton } from '../SubmitButton';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<SubmitButton />', () => {
  it('when pass correct props should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <SubmitButton 
          sendFormData={jest.fn(() => {})} 
          label='mock label' 
        />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})