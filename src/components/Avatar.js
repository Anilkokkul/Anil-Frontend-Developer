import { motion } from "framer-motion";

const Avatar = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50, color: "#000" },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      color: "rgb(6 213 246)",
      transition: {
        delay: custom * 0.3,
        duration: 0.7,
      },
    }),
  };

  return (
    <div className=" md:flex justify-start items-center gap-10 p-5 relative md:left-[-150px]">
      <motion.div
        initial={{ y: "20%", height: "300px" }}
        whileInView={{ y: 0, height: "100%" }}
        transition={{ duration: 2 }}
        className="md:w-[60%] md:rounded-r-lg rounded-lg overflow-hidden object-cover"
      >
        <img src="/Avatar-ai.png" alt="avatar-ai" className="overflow-hidden" />
      </motion.div>
      <div>
        <h1 className=" md:text-7xl text-3xl mt-5 font-semibold">
          How it works
        </h1>
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          className="text-section text-4xl mt-10"
        >
          Select an Avatar
        </motion.p>
        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          className="text-section text-4xl mt-3"
        >
          Create or Generate Script
        </motion.p>
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          className="text-section text-4xl mt-3"
        >
          Select AI Voices
        </motion.p>
        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          className="text-4xl mt-3"
        >
          Piblish
        </motion.p>
      </div>
    </div>
  );
};

export default Avatar;
