import React from 'react';
import { render } from '@testing-library/react';
import { UploadFile } from '../UploadFile';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<UploadFile />', () => {
  it('When pass correct props, should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <UploadFile 
          handleUploadFile={jest.fn(() => {})} 
          hintText='hint text mock' 
          fileName='fileName mock'
        />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
});
