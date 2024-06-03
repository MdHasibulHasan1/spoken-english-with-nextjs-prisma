// import { useRouter } from "next/navigation";

import { prisma } from "@/lib/db/prisma";
import { BsPostcard } from "react-icons/bs";
// import CallToAction from "../components/CallToAction";
// import CommentSection from "../components/CommentSection";
import PostCard from "@/components/PostCard";
const PostPage = async () => {
  //   const router = useRouter();

  let loading = true;
  const recentChapter = await prisma.chapter.findMany({});
  loading = false;
  console.log(recentChapter);
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );

  // if (!post) return <div>Error fetching post</div>;

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      {/*  <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post?.title}
      </h1> */}
      <div className="mt-5">
        {/*  <Button color="gray" pill size="xs">
          {post?.category}
        </Button> */}
      </div>
      {/*    <img
        src={post?.image}
        alt={post?.title}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      /> */}
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        {/* <span>{new Date(post?.createdAt).toLocaleDateString()}</span> */}
        {/*   <span className="italic">
          {(post?.content?.length / 1000).toFixed(0)} mins read
        </span> */}
      </div>
      {/*   <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      ></div> */}
      <div className="max-w-4xl mx-auto w-full">
        {/* // <CallToAction /> */}
      </div>
      {/* // <CommentSection postId={post._id} /> */}
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentChapter?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default PostPage;
