import React, {useState} from "react";

import styled from "styled-components"

const AddPostForm = styled.form`
    display: flex;
    margin-top: 20px;
`
const AddPostFormInput = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`


const PostAddForm = ({addItem}) => {

    const [inputValue, setInputValue] = useState('')

    return (
        <AddPostForm as='div'>
            <AddPostFormInput
                type="text"
                value={inputValue}
                placeholder="О чем вы сейчас думаете?"
                className="form-control"
                onChange={ (e) => {
                    setInputValue(e.target.value)
                }}
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={ () => {
                    if (inputValue){
                        addItem(inputValue);
                    }
                    setInputValue('')
                }}>
                Добавить</button>
        </AddPostForm>
    )
}
export default PostAddForm;