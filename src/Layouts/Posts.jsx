import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../Features/Posts/postsSlice";

export default function Posts() {
    const {posts, isLoading, isError, error} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [dispatch])

    let content;
    // // when is loading
    if(isLoading){
        content = <h1>Loading...</h1>
    }

    if(!isLoading && isError){
        content = <h1 className="text-2xl text-red-500">{error}</h1>
    }

    if(!isError && !isLoading && posts.length > 0){
        content = <ul>{posts.map((post, index) => <li
        className="flex gap-2 justify-start"
        key={post.id}>
            <div>{index + 1}.</div>
            <div>{post.title}</div>
        </li>)}</ul>
        
    }
    
    console.log(posts, isLoading, isError, error)


  return (
    <div className="text-3xl text-black">{content}</div>
  )
}
