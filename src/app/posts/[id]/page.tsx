import { IPost } from "@/components/PostCard";
import Link from "next/link";
import React from "react";

async function getPost(id: string): Promise<IPost> {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let post = await res.json();
  return post;
}

const Post = async ({ params: { id } }: { params: { id: string } }) => {
  let post = await getPost(id);
  return (
    <main className="p-4 flex flex-col gap-4 text-center">
      <h1 className=" text-2xl font-bold">{post.title}</h1>
      <Link href={`/users/${post.userId}`} className="font-bold">
        Creator ID: {post.userId}
      </Link>
      <p>{post.body}</p>
    </main>
  );
};

export default Post;
