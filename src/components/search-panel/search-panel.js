import React, {useState} from "react";

const SearchPanel = ({ searchPanel }) => {


    const [searchInput, setSearchInput] = useState('')

    return (
        <input
            value={searchInput}
            className='form-control search-input'
            type='text'
            placeholder='Поиск'
            onChange={ (e) => {
                setSearchInput(e.target.value)
                searchPanel(e.target.value)
            }}
        />
    )
}
export default SearchPanel