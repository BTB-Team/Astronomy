
import { motion } from "framer-motion";

export default function TeamCard({ name, role, quote, image }) {

 
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="group relative overflow-hidden rounded-[30px] border border-purple-500/20 "
    >
      {/* IMAGE */}
      <div className=" sm:h-[380px] lg:h-[420px] overflow-hidden mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {name}
        </h3>

        <p className="text-purple-400 mb-5 text-sm sm:text-base">
          {role}
        </p>

        <p className="text-gray-400 leading-8 italic text-sm sm:text-base">
          "{quote}"
        </p>
      </div>

      {/* HOVER */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-[30px] duration-300"></div>
    </motion.div>
  );
}