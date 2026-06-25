"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px] transition-transform duration-300 ease-out"
        style={{
          left: x,
          top: y,
          background:
            "radial-gradient(circle, rgba(0,245,212,0.15) 0%, rgba(123,97,255,0.1) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
