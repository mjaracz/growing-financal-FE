import React, { ChangeEvent } from 'react';
import { Checkbox as DefaultCheckbox } from '@material-ui/core'
import { useStyle } from '../CustomTextField'

export interface Props {
  checked: boolean;
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: Props) => {
  const styles = useStyle();
  
  return (
    <DefaultCheckbox
      className={styles.textField}
      checked={props.checked}
      onChange={props.handleCheckboxChange}
      color='primary'
    />
  )
}