import {useState, useEffect} from "react";
import Post from "./components/Posts";

// const App = () => {
//     const [post, setPost] = useState([])
//     useEffect(()=>{
//         fetch ('https://jsonplaceholder.typicode.com/posts')
//             .then(value => value.json())
//             .then(value => setPost(value))
//
//     },[])


//     return (<>
//         {post.map(value => (<Post   post = {value} key ={value.id}/>))}
//
//     </>)
//
//     const [post, setPost] = useState([])
//     useEffect(()=>{
//         fetch ('https://api.spacexdata.com/v3/launches/')
//             .then(value => value.json())
//             .then(value => setPost(value))
//
//     },[])
//
//     return (<>
//                  {post.filter(value => value.launch_year !== "2020").map(value => (<Post   post = {value} key ={value.mission_name}/>))}
//
//              </>)
// }
// export default App
