import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Magnus vs Alireza", body: "1/2-1/2", author: "Daniel Naroditsky", id: 1},
        {title: "CHESS DRAMA!!!", body: "HANS NIEMANN!!!", author: "GothamChess", id: 2}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log("effect ran");
    })

    return (  
        <div className = "Home">
            <BlogList blogs = {blogs} title = "All Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;