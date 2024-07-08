const PhotoList = ({ photos }) => {
    return (
        <ul>
            {photos.map((photo) => (
                <li key={photo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <img src={photo.url} alt={photo.title} style={{ width: '50px', height: '50px', marginRight: '1rem' }} />
                    <div>
                        <h3>{photo.title}</h3>
                        <p>{photo.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default PhotoList
