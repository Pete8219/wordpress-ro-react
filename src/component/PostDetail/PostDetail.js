import React, { Component, Fragment } from 'react'
import classes from './PostDetail.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import renderHTML from 'react-render-html'
import Loader from '../../UI/Loader/Loader'

export class PostDetail extends Component {

    state = {
        post: {},
        loading: false
    }

    componentDidMount() {
        
const{id, featured_media} = this.props.match.params
console.log(this.props)

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
            <Link to="/" className="goBack">Вернуться назад</Link>
            <hr/>
            <div className={classes.PostDetail}>
            <h1>{post.title.rendered}</h1>
            <div className={classes.Content}>
                    {renderHTML(post.content.rendered)}

            </div>
            </div>
        </Fragment>
        
    )

}
return <Loader/>

        
    }
}

export default PostDetail
