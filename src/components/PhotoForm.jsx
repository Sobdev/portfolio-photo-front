import { useState } from 'react';

const PhotoForm = ({ onAddPhoto }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPhoto({ title, description, url });
        setTitle('');
        setDescription('');
        setUrl('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
                type="text"
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Add Photo
            </button>
        </form>
    );
};

export default PhotoForm;
