import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function AppNavBar(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    //console.log('before navigate');
    //navigate('/vadminhome');
    //console.log('after navigate');
    setAnchorEl(null);

  };

  const handleHomeClick = () => {
    console.log('navigating to home....');
    navigate('/vadminhome');

    //console.log('after navigate');
    setAnchorEl(null);

  };

  const handleClickLogoutVerification = () => {
    localStorage.removeItem('signInVerification');
    navigate('/');
    console.log('Logout clicked');
    setAnchorEl(null);

  }

  const handleClickLogoutInventory = () => {
    localStorage.removeItem('signInInventory');
    navigate('/');
    console.log('Logout clicked');
    setAnchorEl(null);

  }

  const handleClickMapping = () => {
    navigate('/usermap');
    setAnchorEl(null);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            //disabled={true}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          {auth && (
            <div>

                {    localStorage.getItem('signInVerification') === 'true' && 

                <div className='navbar-brand'>
                <Button sx={{backgroundColor: "#9DD6DF",
                    '&:hover': {   backgroundColor: '#D3EBCD',
                                    opacity: [0.9,0.8,0.7]
                                },
                    }} variant='outlined' color='success' onClick={handleClickMapping}>Mappings</Button>
                </div>
                } 

                {    localStorage.getItem('signInVerification') === 'true' && 

                    <div className='navbar-brand'>
                    <Button sx={{backgroundColor: "#FBC5C5",
                         '&:hover': {   backgroundColor: '#FCC5C0',
                                        opacity: [0.9,0.8,0.7]
                                    },
                         }} variant='outlined' color='error' onClick={handleHomeClick}>Home</Button>
                    </div>
                } 





                {    (localStorage.getItem('signInVerification') === 'true' || localStorage.getItem('signInInventory') === 'true') && 

                    <div className='navbar-brand'>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >   
                        { localStorage.getItem('signInVerification') === 'true' &&
                          <div>
                            <MenuItem onClick={handleClickLogoutVerification}>Logout</MenuItem>
                            <MenuItem onClick={handleClickMapping}>Mappings</MenuItem>
                          </div>
                        }

                        { localStorage.getItem('signInInventory') === 'true' &&
                          <div>
                            <MenuItem onClick={handleClickLogoutInventory}>Logout</MenuItem>
                          </div>
                        }

                    </Menu>
                    </div>
                }
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
