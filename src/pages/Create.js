import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const Create = () => {
  return (
    <Container>
      <Typography
        variant='h6'
        component='h1'
        gutterBottom
        color='textSecondary'
      >
        Create a New Note
      </Typography>
      <Button
        onClick={() => console.log('button clicked')}
        type='submit'
        color='secondary'
        variant='contained'
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  )
}

export default Create
