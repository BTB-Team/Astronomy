import React, { useState, useEffect } from "react";
import { FaRegComment, FaPaperPlane, FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { SlLike } from "react-icons/sl";

const PostActions = ({ postId, initialLikes = 0, initialComments = [] }) => {
    const { t } = useTranslation();
    const [likes, setLikes] = useState(() => {
        const saved = localStorage.getItem(`likes_${postId}`);
        return saved ? parseInt(saved, 10) : initialLikes;
    });

    const [isLiked, setIsLiked] = useState(() => {
        return localStorage.getItem(`isLiked_${postId}`) === "true";
    });

    const [comments, setComments] = useState(() => {
        const saved = localStorage.getItem(`comments_${postId}`);
        try {
            return saved ? JSON.parse(saved) : (Array.isArray(initialComments) ? initialComments : []);
        } catch {
            return [];
        }
    });
  
    const [commentInput, setCommentInput] = useState("");
    const [showCommentBox, setShowCommentBox] = useState(false);

    useEffect(() => {
        localStorage.setItem(`likes_${postId}`, likes);
        localStorage.setItem(`isLiked_${postId}`, isLiked);
    }, [likes, isLiked, postId]);

    useEffect(() => {
        localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
    }, [comments, postId]);

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        if (isLiked) {
            setLikes((prev) => prev - 1);
        } else {
            setLikes((prev) => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        if (!commentInput.trim()) return;
        const newComment = {
            id: Date.now(),
            text: commentInput,
            date: new Date().toLocaleDateString(),
        };
        setComments((prev) => [...prev, newComment]);
        setCommentInput("");
    };
 
    const handleDeleteComment = (e, commentId) => {
        e.preventDefault();
        e.stopPropagation(); 
        setComments((prev) => prev.filter((item) => item.id !== commentId));
    };

  return (
    <div className="absoulte bottom-0 mt-4 pt-3 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center justify-between gap-6 text-sm text-gray-300">
            <button onClick={handleLike} className="flex items-center bg-purple-600/20 py-1 px-3 rounded-full gap-3 cursor-pointer" >
                <SlLike size={18} className={`${isLiked ? "text-blue-500 font-bold" : ""}`} />
                <span>{likes}</span>
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowCommentBox(!showCommentBox);
                }}
              className="flex items-center bg-purple-600/20 py-1 px-3 rounded-full gap-3 cursor-pointer"
            >
                 <FaRegComment size={17} />
                <span>{comments.length}</span>
            </button>
        </div>
        {showCommentBox && (
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 space-y-3">
                <form onSubmit={handleAddComment} onClick={(e) => e.stopPropagation()} className="flex gap-2">
                    <input
                      type="text"
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      placeholder={t("blog.writeComment") || "نظر خود را بنویسید..."}
                      className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                    <button  type="submit"
                      className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition flex items-center justify-center cursor-pointer"
                    >
                        <FaPaperPlane size={12} />
                    </button>
                 </form>
                <div className="max-h-32 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    {comments.length === 0 ? (
                        <p className="text-[11px] text-gray-500 text-center py-2"> {t("blog.noComments") } </p>
                    ) : (
                        comments.map((comment) => (
                        <div key={comment.id}
                         className="flex items-start justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-xs"
                        >
                            <div className="space-y-1">
                                <p className="text-gray-200 break-all">{comment.text}</p>
                                <span className="text-[10px] text-gray-500 block">{comment.date}</span>
                            </div>
                            <button
                              onClick={(e) => handleDeleteComment(e, comment.id)}
                              className="text-gray-500 hover:text-red-400 p-1 transition cursor-pointer"
                            >
                                <FaTrash size={10} />
                            </button>
                        </div>
                   ))
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default PostActions;
