"use client";
import { tags } from "@/app/data/tags";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

const ScrollableTags = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    const scrollAmount = clientWidth * 0.7;

    containerRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-surface w-full mt-3 px-6 py-4">
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("left")}
          className="bg-background shadow-md rounded-[6px] p-1 hover:bg-gray-100 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex gap-3 h-6 overflow-x-auto no-scrollbar scroll-smooth px-8"
      >
        {tags.map((tag, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-muted text-muted-foreground px-4 rounded-[6px] whitespace-nowrap cursor-pointer hover:bg-primary hover:text-white transition"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("right")}
          className="bg-background shadow-md rounded-[6px] p-1 hover:bg-gray-100 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ScrollableTags;
