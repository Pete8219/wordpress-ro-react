import React, { Component } from 'react'
import axios from 'axios'
import renderHTML from 'react-render-html'
import propTypes from 'prop-types'
import classes from './PostItem.module.css'



export class PostItem extends Component {
    state = {
        imgUrl: '',
        author: '',
        loading: false
    }


    static propTypes = {
        post: propTypes.object.isRequired
    }

    


componentDidMount() {
    const {featured_media, author} = this.props.post
    const getImageUrl = axios.get(`http://msp.salekhard.org/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`http://msp.salekhard.org/wp-json/wp/v2/users/${author}`);

    Promise.all([getImageUrl, getAuthor]).then (res => {
        console.log(res)
        this.setState({
            imgUrl: res[0].data.media_details.sizes.medium.source_url,
            author: res[1].data.name,
            loading: true
        })
    }
)
}    
    render() {
        const {title, excerpt, content} = this.props.post;
        
        
        return (
            <div className={classes.PostItem}> 
                <h4>{title.rendered}</h4>
                <img src={this.state.imgUrl} alt="111"/>
                <div> 
                {renderHTML(excerpt.rendered)}
                
                </div>
                
            </div>
        )
    }
}

export default PostItem
