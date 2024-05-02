import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import { useTheme } from '@mui/material/styles'; // Import useTheme

const drawerWidth = 240;
const navItems = ['Home', 'Portfolio', 'About', 'Books', 'Blog', 'ClientAlbums', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme(); // Access theme

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#fff', color: '#333' }}> {/* Change AppBar background color to white and text color to dark grey */}
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            J . A L I S S A
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#333' }}>{/* Change button text color to dark grey */}
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div style={{ position: 'relative', width: '100%' }}>
              <img src="https://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_590,h_782,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg" alt="Image 1" style={{ width: '100%' }} />
              <Typography variant="body2" sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.7)', padding: '4px', borderRadius: '4px' }}>
                EDITORIAL
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ position: 'relative', width: '100%' }}>
              <img src="https://static.wixstatic.com/media/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_573,h_782,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg" alt="Image 2" style={{ width: '100%' }} />
              <Typography variant="body2" sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.7)', padding: '4px', borderRadius: '4px' }}>
                FOOD & SERVE
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ position: 'relative', width: '100%' }}>
              <img src="https://static.wixstatic.com/media/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg/v1/fill/w_575,h_782,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg" alt="Image 3" style={{ width: '100%' }} />
              <Typography variant="body2" sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.7)', padding: '4px', borderRadius: '4px' }}>
                BAKED GOODS
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
