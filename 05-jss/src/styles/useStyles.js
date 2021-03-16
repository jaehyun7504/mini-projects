import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  App: {
    textAlign: 'center',
    '& h1': {
      fontSize: props => `${props.number * 2}rem`,
      fontWeight: '400',
      color: props => props.color,
    },
  },
});

export default useStyles;
