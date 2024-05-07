import { useState, useEffect } from 'react';
import BlogRow from './components/blog-row';
import BlogTitle from './components/blog-title';
import Hero from './components/hero';
import axios from 'axios'

// Replace with a database
// const blogInfo = [
//     {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'},
//     {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'},
//     {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'}
// ]

function Home(props) {

    console.log(props)

    const [blogInfo, setBlogInfo] = useState([{}])

    // Return the first three blogs
    useEffect(() => {

        (async () => {
            const response = await axios.get("blogs/featured")
            console.log(response)
            setBlogInfo(response.data)
        })
        
        ();
    }, [])

    return (
        <>
        <Hero />
        <BlogTitle />
        <BlogRow featured = {false} view = {props.view} edit = {props.edit} delete = {props.delete} blogList = {blogInfo}/>
        </>
    )

}

export default Home