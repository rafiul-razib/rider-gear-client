import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import AdminRoute from '../Shared/Login/AdminRoute';


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
      <Link to="/"><Button  variant="text">Home</Button></Link>
      <br />
      <Link to={`${url}/`}><Button  variant="text">My Orders</Button></Link>
      <br />
      <Link to={`${url}/payment`}><Button  variant="text">Payment</Button></Link>
      <br />
      <Link to={`${url}/myReview`}><Button  variant="text">Review</Button></Link>
      <br />
      
      {
        admin && 
        <Box>
          <Link to={`${url}/makeAdmin`}><Button  variant="text">Make Admin</Button></Link>
      
          <br />
          <Link to={`${url}/allOrders`}><Button  variant="text">All Orders</Button></Link>
          
          <br />
          <Link to={`${url}/addProduct`}><Button  variant="text">Add Product</Button></Link>
          
          <br />
          <Link to={`${url}/manageProducts`}><Button  variant="text">Manage Products</Button></Link>
        </Box>
      }
      
      <br />
      <Button  variant="text" onClick={handleLogOut}>Log Out</Button>
    
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
            <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/allOrders`}>
                <AllOrders></AllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
            </AdminRoute>
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
