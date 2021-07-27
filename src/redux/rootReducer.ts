import questionnaireFormReducer from './questionnaireForm/questionnaireFormSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  questionnaireForm: questionnaireFormReducer,
});
