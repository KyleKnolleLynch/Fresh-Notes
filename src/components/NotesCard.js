import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import Typography from '@material-ui/core/Typography'

const NotesCard = ({
  note: { title, details, category, id },
  handleDelete,
}) => {
  return (
    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton aria-label='settings' onClick={() => handleDelete(id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={title}
        subheader={category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NotesCard
