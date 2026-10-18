"use client";

import { useEffect, useRef } from "react";

/** Horizontally scrollable step bar that brings the current stage into view on narrow screens. */
export function StageNavScroller({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = ref.current;
    const active = list?.querySelector<HTMLElement>("[aria-current=page]");
    if (!list || !active || list.scrollWidth <= list.clientWidth) return;
    list.scrollLeft = active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2;
  }, []);

  return (
    <ol
      ref={ref}
      className="panel flex snap-x gap-1 overflow-x-auto scroll-px-1.5 rounded-2xl! p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </ol>
  );
}
