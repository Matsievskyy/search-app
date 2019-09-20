import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';


import classes from './SearchPage.module.css';

class SearchPage extends Component {
    state = {
        inputValue: '',
        searchValue: ''
    };

    searchPost() {
        if (this.state.inputValue.length >= 2) {
            this.setState(
                { searchValue: this.state.inputValue }
            )
            const queryParams = this.state.inputValue
            this.props.history.push({
                pathname: '/result',
                search: '?' + queryParams
            })
        }
    };

    render() {
        return (
            <div className={classes.searchPageWrapper}>
                <Input onTextChange={value => this.setState({ inputValue: value })} />
                <Button handleClick={this.searchPost.bind(this)}>Search</Button>
            </div>
        )
    };
};

export default SearchPage;