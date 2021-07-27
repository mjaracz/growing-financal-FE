import { ChangeEvent, useEffect, useState } from 'react';
import { getCurrenciesRateAsync, selectCurrencies, selectStatus, saveFormData, selectFormData } from 'redux/questionnaireForm/questionnaireFormSlice';
import { AppDispatch, useTypedSelector } from 'redux/store';
import { useDispatch } from 'react-redux';

export const useQuestionnaireForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currencies = useTypedSelector(selectCurrencies);
  const status = useTypedSelector(selectStatus);
  const formData = useTypedSelector(selectFormData);
  
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [currency, setCurrency] = useState<string>();
  const [fileName, setFileName] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [checked, setChecked] = useState<boolean>();

  const [isInvalidName, setIsInvalidName] = useState<boolean>(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);

  const [hintUploadText, setHintUploadText] = useState<string>();
  const [hintSubmit, setHintSubmit] = useState<string>();
  const [redirectToSummary, setRedirectToSummary] = useState<boolean>(false);

  const nameRegExp = /^[a-zA-Z]{3,}$/;
  const emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  useEffect(() => {
    if (status === '') {
      dispatch(getCurrenciesRateAsync());
    }
  }, [dispatch, status]);

  function validateProjectNameAndSave(event: ChangeEvent<HTMLInputElement>) {
    const isInvalid = !nameRegExp.test(event.target.value);
    if (!isInvalid) setName(event.target.value);
    setIsInvalidName(isInvalid);
  }
  function validateEmailAndSave(event: ChangeEvent<HTMLInputElement>) {
    const isInvalid = !emailRegExp.test(event.target.value);
    if (!isInvalid) setEmail(event.target.value);
    setIsInvalidEmail(isInvalid);
  }
  function saveCurrency(event: ChangeEvent<HTMLInputElement>) {
    setCurrency(event.target.innerText);
  }
  function saveUploadedFile(event) {
    const fileName = event.target?.files[0]?.name;
    if (fileName.includes('.jpg') || fileName.includes('.png')) setFileName(fileName);
    else setHintUploadText('Pleas provide only image file with .jpg or .png extension')
  }
  function saveDate(date: Date | null) {
    setSelectedDate(date);
  }
  function saveCheckbox(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }
  function sendFormData() {
    const isCorrectFormData: boolean = validateFormData();
    if (isCorrectFormData) {
      dispatch(
        saveFormData({
          email: email,
          projectName: name,
          isChecked: checked,
          startDate: selectedDate.toString(),
          selectedCurrency: currency,
          uploadedFilename: fileName,
        })
      );
      setHintSubmit('');
      setRedirectToSummary(true);
    }
    else setHintSubmit('some of form data is incorrect, please try again')
    
  }
  function validateFormData(): boolean {
    const isValidName: boolean = !!(!isInvalidName && name)
    const isValidEmail: boolean = !!(!isInvalidEmail && email)
    const isChecked: boolean = !!checked;
    const isSelectedDate: boolean = !!selectedDate;
    const isSelectedCurrency: boolean = !!currency;
    const isUploadFile: boolean = !!fileName;

    return (
      isValidName &&
      isValidEmail &&
      isChecked &&
      isSelectedDate &&
      isSelectedCurrency &&
      isUploadFile
    )
  }


  return {
    currencies,
    status,
    isInvalidName,
    isInvalidEmail,
    validateProjectNameAndSave,
    validateEmailAndSave,
    saveCurrency,
    saveUploadedFile,
    saveCheckbox,
    hintUploadText,
    fileName,
    saveDate,
    selectedDate,
    checked,
    sendFormData,
    hintSubmit,
    formData,
    redirectToSummary,
  }
}
