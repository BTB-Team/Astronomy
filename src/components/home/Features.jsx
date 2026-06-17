import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productPost } from "../../data/productPost";

export default function Features() {
  const { t } = useTranslation();
  const latestPosts = [...productPost].slice(-3).reverse();
  return (
    <section className="py-20 mt-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t("features.mainTitle")}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <Link
             key={post.id}
            to={`/blog/${post.id}`}
            className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition duration-300 block"
            
          >
            {/* Image */}
            <img
              src={post.image}
              alt={t(`blog.posts.${post.title}`)}
              className="h-48 w-full object-cover"
            />
            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                 {t(`blog.posts.${post.title}`)}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
              {t(`blog.posts.${post.desc}`).slice(0, 120)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}