import React, { ChangeEvent } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CurrencyRate } from './types';
import { CustomTextField } from 'atoms/CustomTextField';

export interface Props {
  currenciesOptions: CurrencyRate[];
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const CurrencySelect = (props: Props) => {
  return (
    <Autocomplete
      onChange={props.handleInputChange}
      options={props.currenciesOptions}
      getOptionLabel={(options) => Object.keys(options)[0]}
      renderInput={(params) => <CustomTextField {...params} label='select currency' />}
    />
  )
}