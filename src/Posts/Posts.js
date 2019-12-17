import React, { Component } from 'react'
import axios from 'axios'

export class Posts extends Component {
    constructor( props ){
        super( props );

        this.state = {
            loading: false,
            posts: [],
            error: '',
        }
    }

    componentDidMount() {
        const wordPressSiteUrl = 'https://msp.salekhard.org/'
        this.setState( {loading: true}, () => {
             axios.get( 'https://msp.salekhard.org//wp-json/wp/v2/posts')
                .then( res => {
                    this.setState( {loading: false, posts: res.data})
                })
                .catch( error => this.setState( {loading: false, error: error.response.data}))   
        });
    }




render () {
    const {posts} = this.state;
    
console.log(this.state)
    

    return (
        <div>
            
            {(posts.lenght) ? (
                <div className = "posts-container">
                    { posts.map( post => (
                        <div key={post.id} >
                           {post.id} 
                        </div>
                    ) )}
                </div>
            ) : ''}

</div>
    )
}
}
    
export default Posts
