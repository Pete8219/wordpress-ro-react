import React, { Component } from 'react'
import axios from 'axios'
import renderHTML from 'react-render-html'
import propTypes from 'prop-types'
import classes from './PostItem.module.css'

import {Link} from 'react-router-dom'



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
        
        this.setState({
            imgUrl: res[0].data.media_details.sizes.full.source_url,
            author: res[1].data.name,
            loading: true
        })
    }
)
}    
    render() {
        console.log(this.props)
        const {title, excerpt, id} = this.props.post;
        
        
        
        return (
            <div className={classes.PostItem}> 
                <img src={this.state.imgUrl} alt={title.rendered}/>
                <Link to={`/post/${id}`}>
                    <p className={classes.Caption}>{title.rendered}</p>
                </Link>    
                
            {/*     <div className={classes.Body}> 
                {renderHTML(excerpt.rendered.slice(0,100) + '...')}
                
                </div> */}
                
               {/*  <Link to={`/post/${id}`}>Подробнее</Link> */}
            </div>
        )
    }
}

export default PostItem
