import React from 'react';
import { QuestionnaireForm } from 'organisms/questionnaireForm';
import { CustomAppBar } from 'molecules/customAppBar';

export const QuestionnairePage = () => {
  return (
    <div>
      <CustomAppBar/>
      <QuestionnaireForm />
    </div>
  )
}