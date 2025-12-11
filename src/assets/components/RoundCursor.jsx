import { useEffect, useRef } from "react";

export default function RoundedCursor({
  size = 38,
  color = "#fbbf24"
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);

    const enter = () => el.classList.add("cursor--grow");
    const leave = () => el.classList.remove("cursor--grow");
    document.querySelectorAll(".cursor-grow").forEach((node) => {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll(".cursor-grow").forEach((node) => {
        node.removeEventListener("mouseenter", enter);
        node.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={ref}
      className="custom-cursor"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: color,
      }}
      aria-hidden="true"
    />
  );
}
