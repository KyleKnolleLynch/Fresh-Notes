import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import NotesCard from '../components/NotesCard'

import Container from '@material-ui/core/Container'

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await fetch('http://localhost:8000/notes')
        const data = await res.json()
        setNotes(data)
      } catch (err) {
        alert(err.message)
      }
    }
    getNotes()
  }, [])

  const handleDelete = async id => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NotesCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Notes
