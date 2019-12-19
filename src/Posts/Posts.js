import React, { Component } from 'react';
import axios from 'axios';
import classes from './Posts.module.css'
import PostItem from '../PostItem/PostItem'
import Loader from '../UI/Loader/Loader'

export class Posts extends Component {
    constructor( props ){
        super( props );

        this.state = {
            loading: false,
            posts: [],
            
        }
    }

    componentDidMount() {
      
        
             axios.get('http://msp.salekhard.org/wp-json/wp/v2/news')
             .then(res => this.setState({
                 posts: res.data,
                 loading: true
                }))
             .catch(err => console.log(err));
    }




    render (){
        
     const {posts} = this.state;
    
    
    if (posts.length) {
        return (
            
            <div className={classes.Posts}>
               
                
                {posts.map(post => (
                    <PostItem key ={post.id} post={post}/>

                   
                ))}
                
            </div>
        )
    }
    return <Loader/>
    


}
}
    
export default Posts
