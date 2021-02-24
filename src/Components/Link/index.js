import React from 'react'

import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.css'

const ListDrawer = React.memo(({ path, children, style, variant }) => (
  <div className="link">
    <Link to={path}>
      <Typography variant={variant} className={style}>
        {children}
      </Typography>
    </Link>
  </div>
))

export default ListDrawer
