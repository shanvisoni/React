import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route,useParams ,NavLink} from "react-router-dom";


// const Name="Shanvi"
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div className="Post-Container">
        
          {posts.map((post) => (
            <NavLink style={{display: "block"}} to={`/post/${post.id}`}>{post.title}</NavLink>
            // <li key={post.id}>{post.title}</li>
          ))}
      
      </div>
    </div>
  );
};


const Profile = () => {
  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
};

const SignIn=()=>{
  <H1>Signin Page</H1>
}
const Login=()=>{
  return(
      <h2>Login Page</h2>
  )

}

const Status=() =>{
  const params=useParams()
  console.log("Params",params)
  return(
  <h1>Your name is {params.userId}</h1>
  )
}



const PostPage=()=>{
  const params=useParams();

  const [data,setData] = useState(null)
  useEffect(()=>{
   fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
   .then((data)=>data.json())
   .then((data)=>setData(data));
  }, [])
  if(data===null) return <p>Loading...</p>
 return(
  <div>
    <h1>{data.title}</h1>
    <p>{data.body}</p>
  </div>
 )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

        <Route path='acount'>
          <Route path='login' element={<Login />}></Route>
          <Route path='signin' element={<SignIn/>}></Route>
        </Route>

        <Route path='user/:userId' element={<Status/>}></Route>
        <Route path='/post/:postId' element={<PostPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
