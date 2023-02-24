import React from "react";
import { YoutubeData } from "../../models/data";
import YoutubeFeature from "./YoutubeFeature";
import { motion } from "framer-motion";

const YoutubeList = () => {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 100 }}
      transition={{
        type: "spring",
      }}
    >
      {YoutubeData.map((item, index) => (
        <YoutubeFeature
          key={item.id}
          image={item.image}
          authorImg={item.authorImg}
          title={item.title}
          author={item.author}
          className={index === 1 ? "active" : "disabled"}
        />
      ))}
    </motion.div>
  );
};

export default YoutubeList;
