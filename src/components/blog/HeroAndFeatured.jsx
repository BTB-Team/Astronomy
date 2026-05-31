import React from "react";
import { Link } from "react-router-dom";
import { CiCalendar, CiStopwatch } from "react-icons/ci";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import PostActions from "./LikeComment";
const HeroAndFeatured = ({
    t,
    featuredPosts,
    currentSlide,
    isFirst,
    isLast,
    nextSlide,
    prevSlide,
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategory,
    setSelectedCategory,
    showAllFeatured,
    setShowAllFeatured,
    visibleFeaturedPosts
}) => {
    return (
        <>
            {/* Hero Section*/}
            {featuredPosts.length > 0 && (
                <section className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-md min-h-[500px] flex items-center mb-16 px-5">
                    <div className="absolute inset-0">
                        <img
                            src={featuredPosts[currentSlide]?.image}
                            alt={featuredPosts[currentSlide]?.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 max-w-2xl p-8 md:p-14 space-y-5">
                        <span className="inline-block px-4 py-1 text-xs rounded-full bg-purple-600/80 border border-purple-400/30">
                            {t("blog.featuredPost")}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            {featuredPosts[currentSlide]?.title}
                        </h1>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {featuredPosts[currentSlide]?.desc?.slice(0, 150)}...
                        </p>
                        <div className="flex items-center gap-4 text-sm text-white">
                            <span className="flex items-center gap-2">
                                <CiCalendar size={15} /> {featuredPosts[currentSlide]?.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <CiStopwatch size={15} /> {featuredPosts[currentSlide]?.readTime} {t("blog.minutesRead")}
                            </span>
                        </div>
                        <Link
                            to={`/blog/${featuredPosts[currentSlide]?.id}`}
                            className="mt-3 px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-700/20 inline-block"
                        >
                            {t("blog.readArticle")}
                        </Link>
                    </div>

                    {/* Button slider*/}
                    <button
                        onClick={prevSlide}
                        disabled={isFirst}
                        className={`absolute left-4 z-20 p-2 rounded-full border transition
                        ${isFirst
                            ? "bg-white/5 text-white/20 cursor-not-allowed"
                            : "bg-white/10 hover:bg-white/20 border-white/10 cursor-pointer"
                        }`}
                    >
                        <FaAngleLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={isLast}
                        className={`absolute right-4 z-20 p-2 rounded-full border transition
                        ${isLast
                            ? "bg-white/5 text-white/20 cursor-not-allowed"
                            : "bg-white/10 hover:bg-white/20 border-white/10 cursor-pointer"
                        }`}
                    >
                        <FaAngleRight />
                    </button>

                    {/* Dot*/}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                        {featuredPosts.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all ${
                                    index === currentSlide ? "w-8 bg-purple-500" : "w-2 bg-purple-300"
                                }`}
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* Section Top*/}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* SideBar*/}
                <aside className="lg:col-span-1 space-y-8 md:mt-4">
                    {/* search*/}
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder={t("blog.searchPlaceholder")}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
                    />
                    {/* Category*/}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl">
                        <h3 className="text-lg font-bold mb-4">{t("blog.categories")}</h3>
                        <ul className="space-y-2">
                            {categories.map((category) => (
                                <li
                                    key={category.name}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition ${
                                        selectedCategory === category.name
                                            ? "bg-purple-600/30 text-purple-300"
                                            : "hover:bg-white/5"
                                    }`}
                                >
                                    <span>{category.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Featured post*/}
                <section className="lg:col-span-3">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-2xl font-bold">{t("blog.featuredPosts")}</h2>
                        <button
                            onClick={() => setShowAllFeatured((prev) => !prev)}
                            className="text-sm text-purple-400 hover:text-purple-300"
                        >
                            {showAllFeatured ? t("blog.close") : t("blog.showAll")}
                        </button>
                    </div>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                        {visibleFeaturedPosts.map((post) => (
                            <div
                                to={`/blog/${post.id}`}
                                key={post.id}
                                className="group overflow-hidden rounded-2xl pb-3 px-3 border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-50 object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                                <div className="p-5 space-y-3">
                                    <h3 className="text-md font-bold">{post.title}</h3>
                                    <p className="text-sm text-gray-400">{post.desc.slice(0, 100)}...</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                                        <span className="flex items-center gap-2">
                                            <CiCalendar size={15} /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <CiStopwatch size={15} /> {post.readTime} {t("blog.minutesRead")}
                                        </span>
                                    </div>
                                </div>
                                <PostActions     postId={post.id} initialLikes={post.likes || 0} initialComments={post.comments || []} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default HeroAndFeatured;
