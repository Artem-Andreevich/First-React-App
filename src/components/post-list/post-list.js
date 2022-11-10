import React from "react";
import PostListItem from "../post-list-item";
import {ListGroup, ListGroupItem} from "reactstrap";

const PostList = ({posts, onDelete, onToggleLike, onToggleImportant}) => {

    const elements = posts.map( (item) => {
        const {id, ...itemProps} = item
        return (
            <ListGroupItem key={id}>
                <PostListItem
                    {...itemProps}
                    onDelete={ () => onDelete(id) }
                    onToggleLike={ () => onToggleLike(id) }
                    onToggleImportant={ () => onToggleImportant(id) }/>
            </ListGroupItem>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}
export default PostList;