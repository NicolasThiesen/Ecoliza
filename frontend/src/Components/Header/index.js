import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListIcon from '@material-ui/icons/List'
import Divider from '@material-ui/core/Divider'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import MapIcon from '@material-ui/icons/Map'
import EcolizaIcon from "../../img/ecoliza-icon.png"
import HomeIcon from '@material-ui/icons/Home'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

export default function Header(props) {
  const [open, setOpen] = React.useState(false)
  const [dark,setDark] = React.useState(false)
  React.useEffect(()=>{
    props.darkStyle({dark: dark})
  },[dark])
  
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const handleDarkStyle = () => {
    setDark(!dark)
  }
  const IOSSwitch = withStyles(theme => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: 5,
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: theme.palette.black,
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[50]}`,
      backgroundColor: '#52d869',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        
        {...props}
      />
    )
  })
  return (
    <div className="main-header">
      <div className="icon">
        <Link to="/">
          <img src={EcolizaIcon} alt="Ícone Ecoliza"></img>
        </Link>
      </div>
      <div className="buttons">
        <Link to="/">
          <button>Página Inicial</button>
        </Link>
        <Link to="/lugares">
          <button>Pontos</button>
        </Link>
        <Link to="/map">
          <button>Mapa</button>
        </Link>
        <WbSunnyIcon/>
        <IOSSwitch onChange={()=>{handleDarkStyle()}} checked={dark}/>
        <Brightness3Icon/>
        <div className="mobile">
            <MenuIcon onClick={handleDrawerOpen}></MenuIcon>

          </div>
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

