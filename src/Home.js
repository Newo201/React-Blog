import BlogRow from './components/blog-row';
import BlogTitle from './components/blog-title';
import Hero from './components/hero';

function Home(props) {

    return (
        <>
        <Hero />
        <BlogTitle />
        <BlogRow featured = {false} view = {props.view} edit = {props.edit} delete = {props.delete} blogList = {props.allBlogs}/>
        </>
    )

}

export default Home