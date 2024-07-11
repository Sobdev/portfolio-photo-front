const PhotoList = ({ photos }) => {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {photos.map((photo) => (
                <li key={photo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <img src={photo.url} alt={photo.title} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '16px' }} />
                    <div>
                        <h4>{photo.title}</h4>
                        <p>{photo.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PhotoList;
