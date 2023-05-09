import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";

const BlogDetails = () => {

    const {id}=useParams();
    const {data: blog,isPending,error}=useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();

    const handleDelete=()=>{
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method: 'DELETE'
        }).then(()=>{
            history.push("/");

        })
    }



    return ( 
    <div className="blog-details">
        {isPending && <div>loading.....</div>}
        {error && <div>{error}</div>}
        {blog &&(
            <article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div>
                 {blog.body}
                </div>
            <button onClick={handleDelete}>DELETE BLOG</button>

            </article>
        )}


    </div>
     );
}
 
export default BlogDetails;