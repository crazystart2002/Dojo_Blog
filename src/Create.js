
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {

    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('luigi');
    const[isPending,setisPending]=useState(false);
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};

        setisPending(true);


        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setisPending(false);
            history.push('/');
        }) 

    }



    return ( 
        <div className="create">
            <h2>ADD New Blog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Blog Title</label>
                <input type="text" required  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body</label>
                <textarea  cols="50" required value={body} onChange={(f)=>setBody(f.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(f)=>setAuthor(f.target.value)}>
                    <option value="mario">Mario</option>
                    <option value='luigi'>Luigi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog......</button>}
                

                
            </form>
        </div>
     );
}
 
export default Create;