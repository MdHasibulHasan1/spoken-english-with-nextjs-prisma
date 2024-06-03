import { FaHeart } from "react-icons/fa";
import React from "react";

interface Blog {
  id: string;
  bloggerImage: string;
  bloggerName: string;
  description: string;
  examples: string[];
  structure: string;
  favorites: string[];
  status: string;
}

interface BlogCardProps {
  blog: Blog;
}

interface User {
  photoURL: string;
  displayName?: string;
  email?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const user: User = { photoURL: "" }; // Update with actual user fetching logic
  const {
    id,
    bloggerImage,
    bloggerName,
    description,
    examples,
    structure,
    favorites,
    status,
  } = blog;

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-2 mb-2 relative ">
        {/* select-none */}
        <div className="bg-red-500 absolute h-full -z-10"></div>
        <div className="z-0">
          <table className="w-full">
            <tbody>
              <tr>
                <td>
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-12 rounded-full object-cover"
                      src={
                        user.photoURL || "https://i.ibb.co/Sw3NrxS/727399.png"
                      }
                      alt="not found"
                    />
                    <h2 className="text-xl font-semibold">
                      {user.displayName || "Easy spoken with structure"}
                    </h2>
                  </div>
                </td>
                <td>
                  <div
                    className="tooltip tooltip-left md:tooltip-top"
                    data-tip={
                      favorites?.includes(user.email || "")
                        ? "Remove From Favorites"
                        : "Add To Favorites"
                    }
                  >
                    <button className="btn bg-[#f4f4f4] rounded-full">
                      <FaHeart
                        color={
                          favorites?.includes(user.email || "")
                            ? "red"
                            : "black"
                        }
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="text-gray-800 relative rounded-lg shadow-sm my-1 border border-gray-600">
                    <div className="bg-base-200 p-2">
                      <div className="relative flex w-full items-center justify-center rounded-bl-full rounded-tr-full mx-auto bg-[#ff5f00]">
                        <div className="flex px-4 py-2 text-center bg-white w-11/12 rounded-bl-full rounded-tr-full mx-auto justify-center font-bold items-center rounded-lg cursor-not-allowed">
                          <div>{structure}</div>
                        </div>
                      </div>
                      <div className="mt-2">
                        {examples.map((example, index) => (
                          <div key={index} className="text-sm md:text-base">
                            <h2>English: {example.split("┈➤")[0]?.trim()}</h2>
                            <h2>
                              Bangla:
                              {" " +
                                example
                                  .split("┈➤")[1]
                                  ?.replace(/☆/g, "")
                                  ?.trim()
                                  ?.toLowerCase()}
                            </h2>
                          </div>
                        ))}
                      </div>
                      {/*  <div>{blog.bloggerEmail}</div>
                    <div>{blog.id}</div> */}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
