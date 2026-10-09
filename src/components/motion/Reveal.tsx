import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { y: 24 },
  visible: { y: 0 },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
}

// Scroll-triggered slide-up reveal, used once per section. Deliberately
// animates only `y`, never `opacity`: a browser that throttles or stalls
// the animation (e.g. a tab that loses focus/visibility mid-transition)
// can leave a component stuck in its "hidden" keyframe indefinitely —
// with opacity that means invisible content forever, which is worse than
// no animation at all. Keeping content always fully visible removes that
// failure mode entirely.
const Reveal = ({ children, className }: RevealProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={variants}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default Reveal;
