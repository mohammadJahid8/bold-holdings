import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function TypingText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ whiteSpace: "normal" }}
      variants={{ visible: {}, hidden: {} }}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-1"
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          transition={{
            delay: inView ? delay + wordIndex * 0.15 : 0,
          }}
        >
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              style={{ display: "inline-block" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: inView
                  ? delay + wordIndex * 0.15 + letterIndex * 0.02
                  : 0,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  );
}
