import React, { useState } from 'react'
import { AppBar, Drawer, Toolbar, Hidden, IconButton } from '@material-ui/core'

import { Menu, Close } from '@material-ui/icons'
import { useTheme } from '@material-ui/core/styles'
import { Link } from 'Components'
import { useStyles } from './components/Styles'
import ListDrawer from './components/ListDrawer'

const Header = React.memo(() => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>

          <Link path="/" style="title" variant="h4">
            Ecoliza
          </Link>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <Close />
            </IconButton>
            <ListDrawer />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <ListDrawer />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
})

export default Header
