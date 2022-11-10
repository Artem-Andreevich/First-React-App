import React, {Component} from "react";
import nextId from "react-id-generator";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


import styled from "styled-components"

const AppDiv = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends Component {

    state = {
        data : [
            {label: "Hello World", important: false, like: false, id: "ewqr"},
            {label: "Hello Worl", important: false, like: false, id: "greeb"},
            {label: "Hello Wor", important: false, like: false, id: "efqer"},
        ],
        tern: '',
        filter: '',
    }
    deleteItem = (id) => {
        this.setState( ({data}) => {
            const item = data.findIndex(elem => elem.id === id);
            const newData = [...data.slice(0, item), ...data.slice(item + 1)];
            return {
               data: newData
            }
        })
    }
    addItem = (body) => {
        this.setState( ({data}) => {
            const newItem = {
                label: body,
                important: false,
                id: nextId()
            }
            const newData = [...data, newItem];
            return {
                data: newData
            }
        })
    }

    searchPost = ( items, tern ) => {
        if( tern === 0) {
            return items
        }
        return items.filter( item => {
            return  item.label.indexOf( tern ) > -1
        })
    }
    searchPanel = ( searchText ) => {
        this.setState( () => {
            return {tern: searchText}
        })
    }

    filterPosts = (items , filter) => {
        if ( filter === 'like') {
            return items.filter( item => item.like);
        }
        else {
            return items
        }
    }
    filterState = (filtered) => {
        this.setState( ({filter}) => {
            return { filter: filtered}
        })
    }

    onToggleImportant = (id) => {
        this.setState( ({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index]
            const newItem = {...old, important: !old.important}
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newData
            }
        })
    }
    onToggleLike = (id) => {
        this.setState( ({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index]
            const newItem = {...old, like: !old.like}
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newData
            }
        })
    }

    render() {
        const {data, tern, filter} = this.state
        const liked = data.filter( item => item.like).length;
        const allPost = data.length;

        const visiblePost = this.filterPosts( this.searchPost(data, tern) , filter)

        return (
            <AppDiv>
                <AppHeader
                    liked={liked}
                    allPost={allPost}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        searchPanel={this.searchPanel}/>
                    <PostStatusFilter filterState={this.filterState}/>
                </div>
                <PostList
                    posts={visiblePost}
                    onDelete={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
                <PostAddForm addItem={ this.addItem }/>
            </AppDiv>
        )
    }

}


