import React, { Component } from 'react'
import axios from 'axios'
import renderHTML from 'react-render-html'
import propTypes from 'prop-types'



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
            imgUrl: res[0].data.media_details.sizes.large.source_url,
            author: res[1].data.name,
            loading: true
        })
    }
)
}    
    render() {
        const {title, excerpt, content} = this.props.post;
        
        
        return (
            <div>
                <h1>{title.rendered}</h1>
                <div> 
                {renderHTML(content.rendered)}
                <img src={this.state.imgUrl} alt="111"/>
                </div>
            </div>
        )
    }
}

export default PostItem
