import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <div className="relative h-64 overflow-hidden flex gap-14 border justify-center">
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-200%", opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8"
      >
        <img src="/7-1.png" alt="pic-1" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/7-2.png" alt="pic-2" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/7-3.png" alt="pic-3" className="w-36 h-36 rounded-lg object-cover" />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-170%", opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8"
      >
        <img src="/6-1.png" alt="pic-1" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/6-2.png" alt="pic-2" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/6-3.png" alt="pic-3" className="w-36 h-36 rounded-lg object-cover" />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-200%", opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8"
      >
        <img src="/5-1.png" alt="pic-1" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/5-2.png" alt="pic-2" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/5-3.png" alt="pic-3" className="w-36 h-36 rounded-lg object-cover" />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-170%", opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8"
      >
        <img src="/4-1.png" alt="pic-1" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/4-2.png" alt="pic-2" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/4-3.png" alt="pic-3" className="w-36 h-36 rounded-lg object-cover" />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-200%", opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8"
      >
        <img src="/3-1.png" alt="pic-1" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/3-2.png" alt="pic-2" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/3-3.png" alt="pic-3" className="w-36 h-36 rounded-lg object-cover" />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-170%", opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8"
      >
        <img src="/2-1.png" alt="pic-1" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/2-2.png" alt="pic-2" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/2-3.png" alt="pic-3" className="w-36 h-36 rounded-lg object-cover" />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-200%", opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8"
      >
        <img src="/nutral-pic.png" alt="pic-1" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/nutral-pic-2.png" alt="pic-2" className="w-36 h-36 rounded-lg object-cover" />
        <img src="/nutral-pic-3.png" alt="pic-3" className="w-36 h-36 rounded-lg object-cover" />
      </motion.div>
    </div>
  );
};

export default Footer;
