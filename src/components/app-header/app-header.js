import React from "react";

import styled from "styled-components"

const HeaderDiv = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover { color: #dedede;}
        color: ${ props => props.colored ? 'red' : 'grey'}
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPost}) => {

    return (
        <HeaderDiv colored>
            <h1>Artem Artem</h1>
            <h2>{allPost} записей, из них нам понравилось {liked}</h2>
        </HeaderDiv>
    )
}
export default AppHeader;