import React from 'react';
import { Button } from '@material-ui/core';
import { useStyle } from './useStyle';

export interface Props {
  sendFormData: (formData: unknown) => void;
  label: string;
}

export const SubmitButton = (props: Props) => {
  const styles = useStyle();

  return (
    <Button
      color='primary'
      variant='contained'
      onClick={props.sendFormData}
      className={styles.button}
      
    >
      {props.label}
    </Button>
  )
}