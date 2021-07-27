import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStyle } from 'atoms/CustomTextField/useStyle';

export interface Props {
  saveDate: (date: Date | null) => void;
  selectedDate: Date;
}

export const DatePicker = ({ saveDate, selectedDate }: Props) => {
  const stylesTextField = useStyle();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={stylesTextField.textField}
        variant='dialog'
        inputVariant='outlined'
        format='dd/MM/yyyy'
        margin='normal'
        label='Choose date'
        value={selectedDate}
        onChange={saveDate}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        disableToolbar
      />
    </MuiPickersUtilsProvider>
  )
}