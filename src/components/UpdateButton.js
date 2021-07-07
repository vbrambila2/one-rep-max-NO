import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import history from '../history';
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
    updateButton: {
        boxShadow: '0px 2px 2px #A9A9A9',
        background: '#e0e0e0',
        borderRadius: '10px',
        width: '10%',
        textAlign: 'center'
    },
    updateInput: {
        display: 'block',
    }
}));

const UpdateButton = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[2]);

    return (
            <Button 
                className={classes.updateButton}
                onClick={() => history.push(`/update/${movementNameURL}`)}
            >
                Update
            </Button> 
    )
};

export default UpdateButton;