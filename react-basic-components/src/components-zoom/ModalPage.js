import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import RestoreIcon from '@material-ui/icons/Restore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    borderRadius: 5,
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 4, 6),
    textAlign: 'center'
  },

  buttonStyle: {
      backgroundColor: '#7FB9F3',
  },

  root: {
    width: 500,
  },

  footer: {
    position: 'fixed',
    left: 11,
    bottom: 0,
    width: 463,
    backgroundColor: '#F1F5F9',
    textAlign: 'center',
    
  },

  linkButton: {
    paddingTop: 20,  
    textTransform: 'lowercase'
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Button variant="contained" className={classes.buttonStyle} href="#contained-buttons">Join with computer audio</Button>
      <Button href="#text-buttons" className={classes.linkButton} color="primary">Test Speakers and microphones</Button>
        
      
      
      {/* <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        </BottomNavigation> */}
        <FormControlLabel control={<Checkbox name="checkedC" />} className={classes.footer} label="Automatically join computer audio when joining a meeting" />
        {/* <BottomNavigation className={classes.footer}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        </BottomNavigation> */}
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
        
      </Modal>
      
    </div>
  );
}