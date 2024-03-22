import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Magnus vs Alireza", body: "1/2-1/2", author: "Daniel Naroditsky", id: 1},
        {title: "CHESS DRAMA!!!", body: "HANS NIEMANN!!!", author: "GothamChess", id: 2}
    ]);
    return (  
        <div className = "Home">
            {blogs.map((blog)=>(
                <div className = "blogPreview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            )

            )}
        </div>
    );
}
 
export default Home;