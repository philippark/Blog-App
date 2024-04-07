const Create = () => {
    return ( 
        <div className = "create">
            <h2>Create</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                />

                <label>Blog content:</label>
                <textarea required/>

                <label>Blog author:</label>
                <select>
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