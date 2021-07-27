import { TextField } from '@material-ui/core';
import { useStyle } from './useStyle';

export const CustomTextField = (props) => {
  const styles = useStyle();
  return (
    <TextField
      {...props}
      className={styles.textField}
      variant='outlined'
    />
  )
}