import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import NotesCard from '../components/NotesCard'

import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'

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
      method: 'DELETE',
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {notes.map(note => (
          <div key={note.id}>
            <NotesCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}

export default Notes
