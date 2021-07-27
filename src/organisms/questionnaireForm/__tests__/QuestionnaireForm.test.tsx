import React from 'react';
import { render } from '@testing-library/react';
import { QuestionnaireForm } from '../QuestionnaireForm';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<QuestionnaireForm />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <QuestionnaireForm />
      </UnitTestWrapper>
    ) 
    expect(baseElement).toMatchSnapshot()
  });
})