import {useState} from 'react';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Gotham");

    return ( 
        <div className = "create">

            <h2>Create</h2>
            <form>
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
                <button>Add Blog</button>

            </form>
        </div>
     );
}
 
export default Create;