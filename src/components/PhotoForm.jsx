import { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

const PhotoForm = ({ onAddPhoto }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddPhoto({ title, description, url })
        setTitle('')
        setDescription('')
        setUrl('')
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <TextField
                label="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <Button variant="contained" color="primary" type="submit">
                Add Photo
            </Button>
        </Box>
    )
}

export default PhotoForm
