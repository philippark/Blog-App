import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Magnus vs Alireza", body: "1/2-1/2", author: "Daniel Naroditsky", id: 1},
        {title: "CHESS DRAMA!!!", body: "HANS NIEMANN!!!", author: "GothamChess", id: 2}
    ]);

    const [name, setName] = useState("mario");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect( () => {
        console.log("effect ran");
    }, [name])

    return (  
        <div className = "Home">
            <BlogList blogs = {blogs} title = "All Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName(name + "!")}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;