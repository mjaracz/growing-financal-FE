import React from 'react';
import { render } from '@testing-library/react';
import { Questionnaire } from '../QuestionnairePage';
import { UnitTestWrapper } from 'common/UnitTestWrapper';

describe('<Questionnaire />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <Questionnaire />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  })
})