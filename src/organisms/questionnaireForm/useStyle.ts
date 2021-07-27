import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    questionnaireForm: {
      display: 'flex',
      width: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '15px auto 20px auto',
      '& > div': {
        margin: '0 90px',
      }
    },
    formTitle: {
      color: theme.palette.primary.main,
      fontSize: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      maxWidth: '100vw',
      height: '120px',
      animation: '$titleEffect infinite 1.5s linear'
    },
    '@keyframes titleEffect': {
      '0%': {
        filter: 'hue-rotate(90deg)',
      },
      '100%': {
        filter: 'hue-rotate(0)',
      },
    },
    submitWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '380px',
      maxWidth: '100vw',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitHint: {
      color: 'rgb(215, 146, 247)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      width: '200px',
      fontSize: 12
    }
  }))