import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { Sparkle, ArrowRight } from "lucide-react";
import BackgroundVideo from "../ui/BackgroundVideo";
import HeroVideo from "../../assets/Videos/HeroBv.mp4";
import TextType from "../ui/TextType";

function Hero() {
  return (
    <BackgroundVideo
      videoSrc={HeroVideo}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center text-center px-6 py-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 pointer-events-none" />

        <div className="flex flex-col items-center select-none max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-6xl font-light text-[#2d2a26] uppercase leading-[0.85] mt-2 tracking-tight"
          >
            <TextType
              text={["Your thoughts", "tasks", "and notes"]}
              typingSpeed={75}
              pauseDuration={1200}
              showCursor
              cursorCharacter="_"
              texts={["Your health notes", "appointments", "and care"]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-[8rem] font-black text-[#2d2a26] uppercase leading-[0.85] tracking-tighter"
          >
            Organized beautifully!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 text-sm sm:text-base text-[#181818] max-w-xl leading-relaxed tracking-wide font-medium"
          >
            <span className="font-bold text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded">
              Cura Note
            </span>{" "}
            captures ideas, organize projects, and stay productive with a
            workspace built for everyone.
          </motion.p>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 mt-10 bg-[#f0ece7] px-6 py-2 rounded-full border border-[#e0dcd5]"
          >
            <span className="text-[16px] sm:text-[20px] font-black uppercase tracking-tight text-[#5c5954]">
              For Thoughtful
            </span>
            <Sparkle className="w-5 h-5 text-emerald-700 fill-emerald-600 animate-spin-slow" />
            <span className="text-xl sm:text-xl font-light uppercase tracking-tight text-[#5c5954]">
              Creators
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <button
            className="px-8 py-4 bg-[#2d2a26] text-white rounded-full font-medium 
             hover:bg-black shadow-lg hover:shadow-xl active:scale-95 text-lg"
          >
            Start Organizing Free
          </button>
        </motion.div>
      </section>
    </BackgroundVideo>
  );
}

export default Hero;
