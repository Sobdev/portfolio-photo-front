import { useState } from 'react'
import PhotoForm from '../components/PhotoForm'
import PhotoList from '../components/PhotoList'

const HomePage = () => {
    const [photos, setPhotos] = useState([])

    const addPhoto = (photo) => {
        setPhotos([...photos, { ...photo, id: Date.now() }])
    }

    return (
        <div>
            <h1>Photo Portfolio</h1>
            <PhotoForm onAddPhoto={addPhoto} />
            <PhotoList photos={photos} />
        </div>
    )
}

export default HomePage
