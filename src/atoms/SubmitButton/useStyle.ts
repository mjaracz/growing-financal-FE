import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    button: {
      width: 180,
      height: 50,
      color: 'rgba(0, 0, 0, 0.87)',
      borderRadius: 50,
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.main,
      transition: '0.5s',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
      }
    }
  })
) 