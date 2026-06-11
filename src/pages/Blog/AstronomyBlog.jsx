import { Link } from "react-router-dom";
import { productPost } from "../../data/productPost";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import HeroAndFeatured from "../../components/blog/HeroAndFeatured";
import AllPostsSection from "../../components/blog/AllPostsSection";
import PageTitle from "../../components/pagetitle";

const AstronomyBlog = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showAllFeatured, setShowAllFeatured] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [posts, setPosts] = useState(productPost);

    const categories = [
        { name: "solarSystem", label: t("blog.solarSystem") },
        { name: "stars", label: t("blog.stars") },
        { name: "galaxies", label: t("blog.galaxies") },
        { name: "spaceEvents", label: t("blog.spaceEvents") },
        { name: "all", label: t("blog.all") },
    ];

    const filteredPosts = productPost.filter((post) => {
        const matchCategory =
        selectedCategory === "all" || post.category === selectedCategory;
        // search on raw data (keys) 
        // const matchSearch =
        // post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // post.category.toLowerCase().includes(searchTerm.toLowerCase());

        // search on translated text (recommended for i18n)
        const matchSearch =
        t(`blog.posts.${post.title}`)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        t(`blog.${post.category}`)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    const featuredPosts = productPost.filter((post) => post.featured);
    const isFirst = currentSlide === 0;
    const isLast = currentSlide === featuredPosts.length - 1;
    const visibleFeaturedPosts = showAllFeatured  ? featuredPosts : featuredPosts.slice(0, 3);
    const nextSlide = () => { setCurrentSlide((prev) => Math.min(prev + 1, featuredPosts.length - 1));};
    const prevSlide = () => { setCurrentSlide((prev) => Math.max(prev - 1, 0));};
  
    return (
        <div className="relative min-h-screen overflow-x-hidden text-white font-sans pb-20">
            <PageTitle title="titles.blog"/>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
               <HeroAndFeatured
                    t={t}
                    featuredPosts={featuredPosts}
                    currentSlide={currentSlide}
                    isFirst={isFirst}
                    isLast={isLast}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    showAllFeatured={showAllFeatured}
                    setShowAllFeatured={setShowAllFeatured}
                    visibleFeaturedPosts={visibleFeaturedPosts}
                />
                <AllPostsSection   t={t}  filteredPosts={filteredPosts} />
            </div>
        </div>
  );
};

export default AstronomyBlog;

