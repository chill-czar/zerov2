"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "~/lib/utils";

type StickyScrollContentItem = {
  title: string;
  description: React.ReactNode;
  content?: React.ReactNode;
};

const BACKGROUND_COLORS = ["#0f172a", "#000000", "#171717"] as const;
const LINEAR_GRADIENTS = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)",
  "linear-gradient(to bottom right, #ec4899, #6366f1)",
  "linear-gradient(to bottom right, #f97316, #eab308)",
] as const;

export const StickyScroll = ({
  content,
  contentClassName,
  stickyOnLeft = false,
  stickyContentOverride,
  hideTitles = false,
  scrollItemClassName,
  scrollContentClassName, // Replaced scrollInnerClassName intent
  stickyPositionClassName = "top-10",
  stickyBackground = false,
  containerClassName,
}: {
  content: StickyScrollContentItem[];
  contentClassName?: string;
  stickyOnLeft?: boolean;
  stickyContentOverride?: React.ReactNode;
  hideTitles?: boolean;
  scrollItemClassName?: string;
  scrollContentClassName?: string;
  stickyPositionClassName?: string;
  stickyBackground?: boolean;
  containerClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const safeContent = useMemo(() => (content?.length ? content : []), [content]);
  const cardLength = Math.max(1, safeContent.length);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = safeContent.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        const prevBreakpoint = cardsBreakpoints[acc] ?? breakpoint;
        const prevDistance = Math.abs(latest - prevBreakpoint);
        if (distance < prevDistance) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const scrollBlock = (
    <div className={cn("relative flex flex-col items-start", scrollContentClassName)}>
      {safeContent.map((item, index) => (
        <div
          key={item.title + index}
          className={cn("w-full", scrollItemClassName, index === safeContent.length - 1 ? "mb-0!" : "")}
        >
          {!hideTitles && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-2xl font-bold text-slate-100 mb-6"
            >
              {item.title}
            </motion.h2>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
            className={cn(
              "w-full transition-opacity duration-500",
            )}
          >
            {item.description}
          </motion.div>
        </div>
      ))}
    </div>
  );

  const stickyInner =
    stickyContentOverride ?? safeContent[activeCard]?.content ?? null;

  const stickyBlock = (
    <div
      className={cn(
        "sticky hidden lg:block",
        stickyPositionClassName,
        contentClassName,
      )}
    >
      {stickyInner}
    </div>
  );

  return (
    <div
      className={cn("relative flex items-start w-full", containerClassName)}
      ref={ref}
    >
      {stickyOnLeft ? (
        <>
          {stickyBlock}
          {scrollBlock}
        </>
      ) : (
        <>
          {scrollBlock}
          {stickyBlock}
        </>
      )}
    </div>
  );
};
