import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const getNotes = async () => {
      try {
        let res = await fetch('http://localhost:8000/notes')
        let data = await res.json()
        setNotes(data)
      } catch (err) {
        alert(err.message)
      }
    }
    getNotes()
  }, [])
  console.log(notes)
  return (
    <Container>
      <div>{notes.map(note => (
        <p key={note.id}>{note.title}</p>
      ))}</div>
    </Container>
  )
}

export default Notes
