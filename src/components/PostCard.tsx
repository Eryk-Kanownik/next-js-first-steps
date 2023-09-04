import Link from "next/link";
import React from "react";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostCard: React.FC<IPost> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-gray-300 p-4">
      <Link href={`/posts/${id.toString()}`} className="text-xl font-bold ">
        {title}
      </Link>
      <div>{body}</div>
    </div>
  );
};

export default PostCard;
