import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
	homeMain: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '22px',
		color: 'white',
		margin: '0 20px'
	},
	mainTextBlock: {
		margin: '22px 0',
		padding: '5px',
		textAlign: 'left',
	}
})