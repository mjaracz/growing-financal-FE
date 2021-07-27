import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    uploadWrapper: {
      width: 180,
      margin: 15,
    },
    uploadFileInput: {
      opacity: 0,
      width: '0.1px',
      height: '0.1px',
      position: 'absolute',
    },
    uploadLabel: {
      display: 'flex',
      position: 'relative',
      width: 180,
      height: 50,
      borderRadius: 25,
      background: `linear-gradient(60deg, ${theme.palette.primary.main}, ${theme.palette.background.default})`,
      boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'filter .2s ease-out',
      '&:hover': {
        filter: 'hue-rotate(90deg)'
      }
    },
    uploadHintText: {
      fontSize: 12,
      color: 'rgb(215, 146, 247)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }))