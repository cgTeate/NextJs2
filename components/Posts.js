import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts=[
        {
            id: "1",
            username: "codewithcalvin",
            userImg: "https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/25/Johnny-Depp-dating.jpg",
            img: "https://images.unsplash.com/photo-1661922479690-36612cdd2efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
            caption: "Nice  picture"
        },
        {
            id: "2",
            username: "ghavidelsahand",
            userImg: "https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/25/Johnny-Depp-dating.jpg",
            img: "https://images.unsplash.com/photo-1661993749894-7771a581f7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            caption: "New car from my city"
        }
    ]
  return (
    <div>
        {posts.map(post =>(
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
