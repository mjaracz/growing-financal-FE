export const initialState = {
  status: '',
  currencies: [],
  formData: {
    email: '',
    projectName: '',
    isChecked: false,
    startDate: new Date().toString(),
    selectedCurrency: '',
    uploadedFilename: '',
  },
  error: '',
}