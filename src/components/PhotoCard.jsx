const PhotoCard = ({ photo }) => {
    return (
        <div className="photo-card">
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
        </div>
    )
}

export default PhotoCard
