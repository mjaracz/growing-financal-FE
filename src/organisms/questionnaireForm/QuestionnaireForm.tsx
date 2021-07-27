import React from 'react';
import { CustomTextField } from 'atoms/CustomTextField';
import { useStyle } from './useStyle';
import { FormTextBlock } from 'molecules/FormTextBlock/FormTextBlock';
import { CurrencySelect } from 'molecules/currencySelect';
import { useQuestionnaireForm } from './useQuestionnaireForm';
import { CircularProgress } from '@material-ui/core';
import { UploadFile } from 'atoms/UploadFileInput';
import { DatePicker } from 'atoms/DatePicker';
import { Checkbox } from 'atoms/Checkbox';
import { SubmitButton } from 'atoms/SubmitButton';
import { Redirect } from 'react-router-dom'

export const QuestionnaireForm = () => {
  const { 
    status,
    currencies,
    isInvalidName,
    isInvalidEmail,
    validateProjectNameAndSave,
    validateEmailAndSave,
    saveCurrency,
    saveUploadedFile,
    fileName,
    hintUploadText,
    saveDate,
    selectedDate,
    checked,
    saveCheckbox,
    sendFormData,
    hintSubmit,
    redirectToSummary,
  } = useQuestionnaireForm();
  const styles = useStyle();

  if (redirectToSummary) {
    return <Redirect to='/summary' />
  }
  return (
    <div className={styles.questionnaireForm}>
      <div className={styles.formTitle}>
        Questionnaire
      </div>
      <FormTextBlock 
        descContent='First of all feel free to type any name of your dream project.'
        FormTextField={
          <CustomTextField 
            onChange={validateProjectNameAndSave} 
            error={isInvalidName}
            helperText={isInvalidName ? 'Name of project is incorrect or is to short' : null }
          />
        }
      />
      <FormTextBlock
        descContent='Next, enter the contact email.'
        FormTextField={
          <CustomTextField
            onChange={validateEmailAndSave}
            error={isInvalidEmail}
            helperText={isInvalidEmail ? 'Invalid email format (name@example.com)' : null}
          />
        }
      />
      <FormTextBlock
          descContent='Type a currency which is most convenient for you.'
          FormTextField={(status === 'loading') 
            ? <CircularProgress size={80} color='primary' /> 
            : <CurrencySelect currenciesOptions={currencies} handleInputChange={saveCurrency} />
          }
      />
      <FormTextBlock 
        descContent='If you have any layout design feel free to upload it to us. Allowed file format, jpg, png. '
        FormTextField={
          <UploadFile 
            fileName={fileName} 
            handleUploadFile={saveUploadedFile} 
            hintText={hintUploadText} 
          />
        }
      />
      <FormTextBlock
        descContent='When you plan to start a project ?'
        FormTextField={
          <DatePicker 
            selectedDate={selectedDate}
            saveDate={saveDate}
          />
        }
      />
      <FormTextBlock
        descContent='One last thing, please check if you have no criminal record and are legally allowed to be in the U.S.'
        FormTextField={
          <Checkbox 
            checked={checked} 
            handleCheckboxChange={saveCheckbox} 
          />
        }
      />
      <div className={styles.submitWrapper}>
        <SubmitButton 
          sendFormData={sendFormData} 
          label='submit'
        />
        <p className={styles.submitHint}>
          {hintSubmit}
        </p>
      </div>
    </div>
  )
}