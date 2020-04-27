import React, { Component } from 'react'
import classes from './Search.modules.scss';

export default class Search extends Component {
    render() {
        return (
        <div class="searchBox">
        <input class="searchInput"type="text" name="" placeholder="Search"/>
        <button class="searchButton" href="#">
            <i class="material-icons">
                search
            </i>
        </button>
        </div>


        )
    }
}
