import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: note => {
      if (note.category === 'work') {
        return yellow[700]
      }
      if (note.category === 'money') {
        return green[500]
      }
      if (note.category === 'todos') {
        return yellow[900]
      }
      return blue[500]
    },
  },
})

const NotesCard = ({ note, handleDelete }) => {
  const classes = useStyles(note)

  return (
    <Card elevation={1} className={classes.test}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            aria-label='settings'
            onClick={() => handleDelete(note.id)}
          >
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NotesCard
