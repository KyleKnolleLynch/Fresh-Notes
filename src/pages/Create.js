import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({})

const Create = () => {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        className={classes.title}
        variant='h6'
        component='h1'
        gutterBottom
        color='textSecondary'
      >
        Create a New Note
      </Typography>
      <Button
        className={classes.btn}
        onClick={() => console.log('button clicked')}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  )
}

export default Create
