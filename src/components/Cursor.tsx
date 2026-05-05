import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);

    // Store the rAF id so we can cancel on cleanup
    const loop = () => {
      if (!hover) {
        cursorPos.x = mousePos.x;
        cursorPos.y = mousePos.y;
        gsap.set(cursor, { x: cursorPos.x, y: cursorPos.y });
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const targets = document.querySelectorAll("[data-cursor]");
    const cleanupFns: (() => void)[] = [];

    targets.forEach((item) => {
      const element = item as HTMLElement;

      const handleOver = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      };

      const handleOut = () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      };

      element.addEventListener("mouseover", handleOver);
      element.addEventListener("mouseout", handleOut);
      cleanupFns.push(() => {
        element.removeEventListener("mouseover", handleOver);
        element.removeEventListener("mouseout", handleOut);
      });
    });

    return () => {
      // Cancel the rAF loop and all listeners
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
