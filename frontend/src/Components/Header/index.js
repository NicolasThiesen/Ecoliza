import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaunchIcon from '@material-ui/icons/Launch';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MapIcon from '@material-ui/icons/Map';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className="main-header">
      <div className="icon">
        <Link to="/">
          <h1>Ecoliza</h1>
        </Link>
      </div>
      <div className="buttons">
          <div className="mobile">
            <MenuIcon onClick={handleDrawerOpen}></MenuIcon>

          </div>
        <Link to="/lugares">
          <button>Pontos de Coleta</button>
        </Link>
      </div>
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
             <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/cadastro">
            <ListItem button key="1">
            <ListItemIcon><AddLocationIcon></AddLocationIcon></ListItemIcon>
              <ListItemText primary="Adicionar um ponto" />
            </ListItem>
          </Link>
          <Link to="/adm">
            <ListItem button key="2">
              <ListItemIcon><LaunchIcon></LaunchIcon></ListItemIcon>
              <ListItemText primary="Fazer Login" />
            </ListItem>
          </Link>
          <Link to="/">
            <ListItem button key="2">
              <ListItemIcon><MapIcon></MapIcon></ListItemIcon>
              <ListItemText primary="Ver Mapa" />
            </ListItem>
          </Link>
        </List>
        
      </Drawer>
    </div>
    
  )
}
