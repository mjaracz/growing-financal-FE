import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    textField: {
      margin: 15,
      width: 180,
      '& > div > input': {
        color: theme.palette.text.secondary
      },
      '& > div > fieldset': {
        borderColor: theme.palette.text.secondary
      },
      '& > div[class="MuiInputBase-root MuiOutlinedInput-root Mui-error Mui-error MuiInputBase-formControl"] > fieldset': {
        borderColor: 'rgb(215, 146, 247) !important'
      },
      '& > div[class="MuiInputBase-root MuiOutlinedInput-root Mui-error Mui-error Mui-focused Mui-focused MuiInputBase-formControl"] > fieldset': {
        borderColor: 'rgb(215, 146, 247) !important'
      },
      '& > p': {
        color: 'rgb(215, 146, 247) !important'
      },
      '& > label': {
        color: theme.palette.text.secondary
      },
      '& > div > div.MuiAutocomplete-endAdornment > button > span > svg': {
        color: theme.palette.text.secondary
      },
      '& > div > div > button > span > svg': {
        color: theme.palette.text.secondary,
      }
    },
  }))