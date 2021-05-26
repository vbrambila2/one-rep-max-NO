import history from '../history';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fab: {
        background: '#C4C4C4',
    },
    fabDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
}));

const FabButton = () => {
    const classes = useStyles();
    return (
        <div className={classes.fabDiv} >
             <Fab 
                className={classes.fab}
                onClick={() => history.push(`/add`)}>  
                <AddIcon />      
            </Fab>
        </div>
       
    )
};

export default FabButton;

