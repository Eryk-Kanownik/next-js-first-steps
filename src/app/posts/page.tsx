import PostCard, { IPost } from "@/components/PostCard";
import React from "react";

async function getPosts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();
  return posts;
}

const Posts = async () => {
  const posts = await getPosts();
  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className=" text-xl font-bold text-center">Posts</h1>
      {posts.map((post: IPost) => (
        <PostCard
          id={post.id}
          body={post.body}
          title={post.title}
          userId={post.userId}
        />
      ))}
    </main>
  );
};

export default Posts;
