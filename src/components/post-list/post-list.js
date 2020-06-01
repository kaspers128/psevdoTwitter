import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const element = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem 
                    label={itemProps.label} 
                    important={itemProps.important} 
                    like={itemProps.like}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        );
    })
    return (
        <ListGroup className="app-list">
            {element}
        </ListGroup>
    );

}

export default PostList;