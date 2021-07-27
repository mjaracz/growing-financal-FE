import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    headerWrapper: {
      flexGrow: 1,
    },
    headerAppBar: {
      background: `${theme.palette.background.default}`,
      borderBottom: `1px solid ${theme.palette.primary.main}`
    },
    headerButton: {
      marginRight: theme.spacing(2),
      color: `${theme.palette.primary.main}`
    },
  })
)