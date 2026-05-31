import React from "react";
import { Link } from "react-router-dom";
import { CiCalendar, CiStopwatch } from "react-icons/ci";
import PostActions from "./LikeComment";

const AllPostsSection = ({ t, filteredPosts }) => {
    return (
        <section className="mt-16 w-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{t("blog.allPosts")}</h2>
            </div>
            {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition duration-300"
                        >
                            <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
                            <div className="p-5 space-y-3">
                                <h3 className="text-2xl font-bold leading-relaxed">{post.title}</h3>
                                <Link to={`/blog/${post.id}`} className="text-sm text-gray-400 leading-relaxed">
                                    {post.desc.slice(0, 120)}...
                                </Link>
                                <div className="text-xs text-gray-500 pt-2 flex justify-between items-center gap-2">
                                    <span className="flex items-center">
                                        <CiCalendar size={15} /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CiStopwatch size={15} /> {post.readTime} {t("blog.minutesRead")}
                                    </span>
                                </div>
                                <div>
                                    <PostActions
                                        postId={post.id}
                                        initialLikes={post.likes || 0}
                                        initialComments={post.comments || []}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 text-gray-400 border border-dashed border-white/30 rounded-2xl">
                    {t("blog.noPosts")}
                </div>
            )}
        </section>
    );
};

export default AllPostsSection;
