import BlogRow from './components/blog-row';
import BlogTitle from './components/blog-title';
import Hero from './components/hero';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home(props) {

    const [featuredBlogs, setFeaturedBlogs] = useState([{}])

    useEffect(() => {

        (async () => {
            const response = await axios.get("/blogs/featured")
            console.log(response)
            setFeaturedBlogs(response.data)
        })
        
        ();
    }, [props.clicks])

    console.log(featuredBlogs)

    return (
        <>
        <Hero />
        <BlogTitle />
        <BlogRow featured = {false} view = {props.view} edit = {props.edit} delete = {props.delete} blogList = {featuredBlogs}/>
        </>
    )

}

export default Home