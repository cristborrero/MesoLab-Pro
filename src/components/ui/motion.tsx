"use client";

import { motion, useInView, type Variants, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { useRef, type ReactNode } from "react";

// ─── Easing curves ───────────────────────────────────────────────────────────
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  spring: { type: "spring", stiffness: 380, damping: 30 },
  enter: [0.0, 0.0, 0.2, 1] as const,
  exit: [0.4, 0.0, 1, 1] as const,
} as const;

// ─── Variant presets ─────────────────────────────────────────────────────────
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  } satisfies Variants,
  fadeDown: {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0 },
  } satisfies Variants,
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  } satisfies Variants,
  fadeLeft: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  } satisfies Variants,
  fadeRight: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  } satisfies Variants,
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  } satisfies Variants,
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  } satisfies Variants,
  staggerSlow: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.05,
      },
    },
  } satisfies Variants,
};

// ─── FadeIn on scroll ────────────────────────────────────────────────────────
interface FadeInProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.55,
  once = true,
  amount = 0.2,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[variant]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: ease.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Staggered container ─────────────────────────────────────────────────────
interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  slow?: boolean;
  once?: boolean;
  amount?: number;
}

export function Stagger({
  children,
  className,
  delay = 0,
  slow = false,
  once = true,
  amount = 0.1,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={slow ? variants.staggerSlow : variants.stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger child (use inside Stagger) ──────────────────────────────────────
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  duration?: number;
}

export function StaggerItem({
  children,
  className,
  variant = "fadeUp",
  duration = 0.5,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration, ease: ease.smooth }}
    >
      {children}
    </motion.div>
  );
}

// ─── Hover card lift ─────────────────────────────────────────────────────────
interface HoverCardProps {
  children: ReactNode;
  className?: string;
  lift?: number;
}

export function HoverCard({ children, className, lift = 4 }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -lift, transition: { duration: 0.2, ease: ease.smooth } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Spotlight card (radial hover gradient) ──────────────────────────────────
interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  lift?: number;
}

export function SpotlightCard({ children, className, lift = 4 }: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const backgroundGradient = useMotionTemplate`
    radial-gradient(
      260px circle at ${mouseX}px ${mouseY}px,
      rgba(0, 206, 206, 0.15),
      transparent 80%
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseEnter() {
    animate(opacity, 1, { duration: 0.35 });
  }

  function handleMouseLeave() {
    animate(opacity, 0, { duration: 0.35 });
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -lift, transition: { duration: 0.2, ease: ease.smooth } }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-inherit z-0"
        style={{
          opacity,
          background: backgroundGradient,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

// ─── Counter (number counting up) ────────────────────────────────────────────
export { motion };
