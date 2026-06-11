import { productPost } from "../../data/productPost";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/pagetitle";
const PostDetails = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const post = productPost.find((item) => item.id === Number(id));

    if (!post) {
        return (
            <div className="text-white p-10">
                {t("postDetails.notFound")}
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white px-4 py-10 max-w-6xl mx-auto">
            <PageTitle title="titles.bookDetails"/>
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-lg bg-purple-600 hover:bg-purple-700   transition"> {t("postDetails.back")} </Link>
                {/* Layout */}                 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Image */}
                <div className="w-full">
                    <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[350px] lg:h-[500px] object-cover rounded-2xl border border-white/10 shadow-lg"
                    />
                </div>
                {/* Content */}
                <div className="space-y-6">
                    {/* Title */}
                    <h1 className="text-3xl lg:text-4xl font-bold leading-snug">  {t(`blog.posts.${post.title}`)}</h1>
                    {/* Category + Date */}
                    <div className="flex flex-col gap-3">
                        <p className="px-4 py-1  w-full flex justify-between">
                        <span> {t("postDetails.category")} :</span> <span>{t(`blog.${post.category}`)}</span>
                    </p>
                    <p className="px-4 w-full flex justify-between">
                        <span>{t("postDetails.views")} :</span> <span className="flex gap-1 items-center">  {post.views || 0} <FaEye /></span>
                    </p>
                </div>
                {/* Description */}
                <p className="text-gray-200 text-base leading-8 whitespace-pre-line">
                    {t(`blog.posts.${post.desc}`)}
                </p>
            </div>
        </div>
    </div>
  );
};

export default PostDetails;