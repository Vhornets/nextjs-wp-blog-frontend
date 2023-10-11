"use client";

import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import { PostCard } from "components/Posts/PostCard";

export const Posts = ({ category = "", postType = "posts" }) => {
  const [posts, setPosts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [textLoadMore, setTextLoadMore] = useState("Load more");

  const search = async () => {
    setTextLoadMore("Loading...");

    const response = await fetch("/api/posts", {
      method: "post",
      body: JSON.stringify({
        page: currentPage,
        category: category,
        postType: postType,
      }),
    });

    const data = await response.json();

    console.log(data);

    setHasNextPage(data.hasNextPage);
    setPosts([...posts, ...data.posts]);
    setCurrentPage(currentPage + 1);
    setTextLoadMore("Load more");

    return data;
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostCard postType={postType} key={uuid()} {...post} />
      ))}

      {hasNextPage && (
        <div className="mt-8 text-center">
          <div className="btn-white" onClick={() => search()}>
            {textLoadMore}
          </div>
        </div>
      )}
    </>
  );
};
