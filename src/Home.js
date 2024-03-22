import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Magnus vs Alireza", body: "1/2-1/2", author: "Daniel Naroditsky", id: 1},
        {title: "CHESS DRAMA!!!", body: "HANS NIEMANN!!!", author: "GothamChess", id: 2}
    ]);


    return (  
        <div className = "Home">
            <BlogList blogs = {blogs} title = "All Blogs"/>
        </div>
    );
}
 
export default Home;