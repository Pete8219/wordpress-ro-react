import React, { Component, Fragment } from 'react'
import classes from './PostDetail.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export class PostDetail extends Component {

    state = {
        post: {},
        loading: false
    }

    componentDidMount() {
        
const{id} = this.props.match.params
console.log(id)

        axios.get(`http://msp.salekhard.org/wp-json/wp/v2/news/${id}`)
        .then(res => this.setState({
            post: res.data,
            loading: true
        }))
        .catch(err => console.log(err))

    }

    render() {
 
const {post, loading} = this.state
/* console.log(post)  */
if(loading) {
    return (
        <Fragment>
            <Link to="/">Go back</Link>
            <hr/>
            <h1>{post.title.rendered}</h1>
        </Fragment>
    )

}
return <h3>Loadin...</h3>

        
    }
}

export default PostDetail
