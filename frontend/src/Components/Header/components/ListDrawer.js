import React from 'react'

import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Inbox } from '@material-ui/icons'
import { Link } from 'Components'

const appBarItems = [
  {
    text: 'Text',
    icon: Inbox,
    path: './'
  },
  {
    text: 'Text',
    icon: Inbox,
    path: './'
  }
]

const ListDrawer = React.memo(() => {
  return (
    <List>
      {appBarItems.map(item => (
        <Link path={item.path} variant="h4" style="text">
          <ListItem button key={item.text}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
})

export default ListDrawer
