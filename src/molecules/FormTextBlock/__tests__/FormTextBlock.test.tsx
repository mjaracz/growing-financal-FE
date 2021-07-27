import React from 'react';
import { render } from '@testing-library/react';
import { UnitTestWrapper } from 'common/UnitTestWrapper';
import { FormTextBlock } from '../FormTextBlock';
import { CustomTextField } from 'atoms/CustomTextField';

describe('<FormTextBlock />', () => {
  it('when pass correct props should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <FormTextBlock 
          descContent='mock description' 
          FormTextField={<CustomTextField />}
        />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})