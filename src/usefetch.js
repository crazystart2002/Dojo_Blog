import { useEffect,useState } from "react";

const useFetch=(url) =>{

    const [data,setData]=useState(null);
    const [isPending,setisPending]=useState(true);
    const [error,seterror]=useState(null);



    useEffect(()=>{
        const abortCont=new AbortController();



        setTimeout(()=>{
        fetch(url,{signal: abortCont.signal})
        .then(res =>{
            if(!res.ok){
                throw Error('could not fetch the data for the that resource');
            }
            return res.json();
        })
        .then((data) =>{
            
            setData(data);
            setisPending(false);
            seterror(null);
        })
        .catch((error)=>{
            if(error.name==='AbortError'){
                console.log('fetch aborted')
            }
            else{
            seterror(error.message);
            setisPending(false);}
        });

    },1000);

    return () => abortCont.abort();
    },[]);


    return{data,isPending,error};
}

export default useFetch;