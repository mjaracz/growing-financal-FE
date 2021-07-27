import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'


export const useStyle = makeStyles((theme: Theme) => createStyles({
  homeHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '25px 0',
  },
  headerLogo: {
    height: '34vmin',
    pointerEvents: 'none',
    animation: `$logoEffect infinite 1200ms linear`,
  },
  '@keyframes logoEffect': {
    '0%': {
      filter: 'hue-rotate(90deg)',
    },
    '100%': {
      filter: 'hue-rotate(0)',
    },
  },
}))