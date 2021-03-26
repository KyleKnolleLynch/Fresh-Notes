import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'

const drawerWidth = 240

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  page: {
    width: '100%',
    background: '#f9f9f9',
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* App Bar */}

      <Drawer className={classes.drawer} variant='permanent' anchor='left' classes={{ paper: classes.drawerPaper }}>
        <div>
          <Typography variant='h5'>Fresh Notes</Typography>
        </div>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  )
}

export default Layout
