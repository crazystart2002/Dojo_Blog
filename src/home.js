// import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";



const Home = () => {

    // const handleDelete=(id)=>{
    //     const newBlog=blogs.filter(blog=>blog.id!==id);
    //     setBlogs(newBlog);
    // }



    const {data: blogs,isPending,error}=useFetch('http://localhost:8000/blogs');

    

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
        {blogs&&<BlogList  blogs={blogs}  title="ALL BLOGS" />}
        </div>
    );
}
 
export default Home;