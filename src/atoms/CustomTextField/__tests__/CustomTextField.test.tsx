import React from 'react';
import { CustomTextField } from '../CustomTextField';
import { render } from '@testing-library/react';
import { UnitTestWrapper } from 'common/UnitTestWrapper';


describe('<CustomTextField />', () => {
  it('should correct match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <CustomTextField />
      </UnitTestWrapper>      
    )
    expect(baseElement).toMatchSnapshot();
  })
})
