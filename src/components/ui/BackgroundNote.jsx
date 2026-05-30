import { motion } from "framer-motion"; // eslint-disable-line

function BackgroundNote({ top, left, delay, rotate, title, content }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 0.7,
        y: [0, -10, 0],
        rotate: [rotate, rotate + 1, rotate],
      }}
      transition={{
        y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: delay },
        rotate: {
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        },
        opacity: { duration: 1.5 },
      }}
      // Interactive Glow & Pop
      whileHover={{
        scale: 1.08,
        opacity: 1,
        rotate: 0,
        boxShadow:
          "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.8)",
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      className="absolute bg-white/70 backdrop-blur-lg p-4 rounded-2xl border border-white/50 w-48 shadow-[0_10px_25px_rgba(0,0,0,0.05)] cursor-default z-10"
      style={{ top, left }}
    >
      <h4 className="text-[9px] font-black uppercase text-[#2d2a26]/70 mb-1 tracking-[0.2em]">
        {title}
      </h4>
      <p className="text-[10px] text-[#5c5954] leading-tight font-medium">
        {content}
      </p>
      {/* <div className="absolute inset-0 overflow-hidden hidden md:block">
          <BackgroundNote
            top="35%"
            left="8%"
            delay={0.2}
            rotate={-3}
            title="System"
            content="Synthesize key points into summaries."
          />
          <BackgroundNote
            top="80%"
            left="6%"
            delay={0.6}
            rotate={4}
            title="Ownership"
            content="Private JWT vault encryption."
          />
          <BackgroundNote
            top="10%"
            left="78%"
            delay={0.4}
            rotate={2}
            title="Velocity"
            content="Micro-saves in 40ms globally."
          />
          <BackgroundNote
            top="55%"
            left="75%"
            delay={0.8}
            rotate={-3}
            title="Privacy"
            content="Zero analytics scripts."
          /> 
        </div> */}
    </motion.div>
  );
}

export default BackgroundNote;
