import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material'

const PhotoList = ({ photos }) => {
    return (
        <List>
            {photos.map((photo) => (
                <ListItem key={photo.id}>
                    <ListItemAvatar>
                        <Avatar src={photo.url} alt={photo.title} />
                    </ListItemAvatar>
                    <ListItemText primary={photo.title} secondary={photo.description} />
                </ListItem>
            ))}
        </List>
    )
}

export default PhotoList