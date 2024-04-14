import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Gotham");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className = "create">

            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Blog content:</label>
                <textarea 
                    required
                    value = {body}
                    onChange={(e)=>setBody(e.target.value)}
                />

                <label>Blog author:</label>
                <select 
                value = {author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Gotham">Gotham</option>
                    <option value="Danya">Danya</option>
                    <option value="Botez">Botez</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
        </div>
     );
}
 
export default Create;