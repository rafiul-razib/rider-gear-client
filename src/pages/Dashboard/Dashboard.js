import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useHistory, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import MyOrders from './MyOrders';
import MyReview from './MyReview';
import Payment from './Payment';
import MakeAdmin from './MakeAdmin';
import AllOrders from './AllOrders';
import AddProduct from './AddProduct';
import ManageProducts from './ManageProducts';
import './Dashboard.css';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const{logOut, admin} = useAuth();
    const history = useHistory();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogOut = e =>{
      logOut(history)
      e.preventDefault()
  }
  

  const drawer = (
    <div>
      <Toolbar />
      <Link to="/"><Button>Home</Button></Link>
      <br />
      <Link to={`${url}/`}><Button>My Orders</Button></Link>
      <br />
      <Link to={`${url}/payment`}><Button>Payment</Button></Link>
      <br />
      <Link to={`${url}/myReview`}><Button>Review</Button></Link>
      <br />
      
      {
        admin && 
        <Box>
          <Link to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link>
      
          <br />
          <Link to={`${url}/allOrders`}><Button>All Orders</Button></Link>
          
          <br />
          <Link to={`${url}/addProduct`}><Button>Add Product</Button></Link>
          
          <br />
          <Link to={`${url}/manageProducts`}><Button>Manage Products</Button></Link>
        </Box>
      }
      
      <br />
      <Button onClick={handleLogOut}>Log Out</Button>
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
            <Route exact path={`${path}/`}>
                <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/myReview`}>
                <MyReview></MyReview>
            </Route>
            <Route path={`${path}/payment`}>
                <Payment></Payment>
            </Route>
            <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/allOrders`}>
                <AllOrders></AllOrders>
            </Route>
            <Route path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
            </Route>
        </Switch>
        
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
