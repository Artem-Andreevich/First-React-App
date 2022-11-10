import React from "react";
import {Button} from "reactstrap";

const PostStatusFilter = ( {filterState} ) => {


    return (
        <div className='btn-group'>
            <Button
                onClick={ () => filterState('all')}
                outline
                color="info"
            >Все</Button>
            <button
                onClick={ () => filterState('like')}
                type="button"
                className="btn btn-outline-secondary"
            >Популярные</button>
        </div>
    )
}
export default PostStatusFilter;