import { useParams } from 'react-router-dom'

const PhotoPage = ({ photos }) => {
    const { id } = useParams()
    const photo = photos.find((photo) => photo.id === parseInt(id))

    return (
        <div>
            {photo ? (
                <>
                    <h1>{photo.title}</h1>
                    <img src={photo.url} alt={photo.title} />
                    <p>{photo.description}</p>
                </>
            ) : (
                <p>Photo not found</p>
            )}
        </div>
    )
}

export default PhotoPage