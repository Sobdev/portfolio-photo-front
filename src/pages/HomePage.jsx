import { useEffect, useState } from 'react'
import PhotoCard from '../components/PhotoCard'
import PhotoForm from '../components/PhotoForm'

const HomePage = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('/photos')
            .then((res) => res.json())
            .then((data) => setPhotos(data))
    }, [])

    const addPhoto = (photo) => {
        fetch('/photos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(photo),
        })
            .then((res) => res.json())
            .then((newPhoto) => setPhotos([...photos, newPhoto]))
    }

    return (
        <div>
            <h1>Photo Portfolio</h1>
            <PhotoForm onAddPhoto={addPhoto} />
            <div className="photo-list">
                {photos.map((photo) => (
                    <PhotoCard key={photo._id} photo={photo} />
                ))}
            </div>
        </div>
    )
}

export default HomePage
