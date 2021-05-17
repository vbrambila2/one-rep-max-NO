import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import history from '../history';

const useStyles = makeStyles((theme) => ({
    homeHeader: {
        background: '#C4C4C4',
        textAlign: 'center',
        boxShadow: '0px 2px 2px #A9A9A9',
        fontFamily: 'PT Sans Caption',
        fontSize: '36px',
        marginBottom: '20px',
        paddingTop: '20px',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    movementButtons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'PT Sans Caption',
        textTransform: 'uppercase',
        marginTop: '100px'
    },
    movementName: {
        background: '#C4C4C4',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '10px',
        marginTop: '30px',
        width: '100%',
    },
    fabDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    fab: {
        background: '#C4C4C4',
    },
}));

const HomePage = () => {
    const classes = useStyles();

    return (
        <div>
            <Header title={"Home Page" }/>
            <div className={classes.fabDiv}>
                <Fab 
                    className={classes.fab}
                    onClick={() => history.push(`/add`)}>  
                    <AddIcon />      
                </Fab>
            </div>
        </div>
    );
};
 export default HomePage;