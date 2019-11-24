import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MapIcon from '@material-ui/icons/Map';
import EcolizaIcon from "../../img/ecoliza-icon.png"
import HomeIcon from '@material-ui/icons/Home';

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
          <img src={EcolizaIcon}></img>
        </Link>
      </div>
      <div className="buttons">
          <div className="mobile">
            <MenuIcon onClick={handleDrawerOpen}></MenuIcon>

          </div>
        <Link to="/">
          <button>Página Inicial</button>
        </Link>
        <Link to="/lugares">
          <button>Pontos</button>
        </Link>
        <Link to="/map">
          <button>Mapa</button>
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
          <Link to="/">
            <ListItem button key="1">
            <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
              <ListItemText primary="Página Inicial" />
            </ListItem>
          </Link>
          <Link to="/lugares">
            <ListItem button key="2">
              <ListItemIcon><ListIcon></ListIcon></ListItemIcon>
              <ListItemText primary="Pontos de Coleta" />
            </ListItem>
          </Link>
          <Link to="/map">
            <ListItem button key="3">
              <ListItemIcon><MapIcon></MapIcon></ListItemIcon>
              <ListItemText primary="Mapa" />
            </ListItem>

          </Link>
       </List>
       </Drawer>
    </div>
  )
}

