import Head from 'next/head'
import { useState, useEffect } from 'react'




export default function Home({posts}) {
  // const [posts, setPosts] = useState([])

  // useEffect(()=>{
  //   const data = fetch('http://jsonplaceholder.typicode.com/posts?_limit=4')
  //   .then(r => r.json())
  //   .then(setPosts)
  // },[])

  const [count, setCount] = useState(0)

  useEffect(()=>{
    const timer = setInterval(() => setCount(n => n+1), 1000);
    return ()=>{
      clearInterval(timer)
    }
  },[])

  return (
   <>
    <Head>
      <title>Mon super blog</title>
    </Head>
    <h1>Count : {count} </h1>
    <ul>
      {posts.map(post => <li>
        <h3>{post.id} - {post.title} </h3>
      </li>)}
    </ul>
   </>
  )
}



// export async function getStaticProps(){
//   const posts = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=4')
//   .then(r => r.json())

//   if(posts) console.log('Y a des donnees')

//   return {
//     props : {
//       posts
//     }
//   }
// } 


export async function getStaticProps(){
  const posts = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(r => r.json())

  if(posts) console.log('Y a des donnees')

  return {
    props : {
      posts
    }
  }
} 

