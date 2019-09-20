import React, { Component } from 'react';
import Axios from 'axios';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Post from '../../components/Post/Post';

import classes from './ResultPage.module.css';


class ResultPage extends Component {
    state = {
        posts: [],
        searchValue: ''
    };

    componentDidMount() {
        const query = this.props.location.search.slice(-1, 0)
        this.setState({
            searchValue: query
        })

        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 25);
                this.setState({ posts: posts });
            })
            .catch(error => {
                console.log(error)
            })
    };

    searchPost() {
        this.setState(
            { searchValue: this.state.inputValue }
        )
    };

    render() {
        const posts = this.state.posts.filter(post =>
            (post.body, post.title).toLowerCase().includes(
                this.state.searchValue.toLowerCase())
        ).map(post => {
            return <Post key={post.id} title={post.title} body={post.body} />
        })

        return (
            <div className={classes.resultPageWrapper}>
                <Input onTextChange={value => this.setState({ inputValue: value })} />
                <Button handleClick={this.searchPost.bind(this)}>Search</Button>
                {posts}
            </div>
        )
    };
};

export default ResultPage;