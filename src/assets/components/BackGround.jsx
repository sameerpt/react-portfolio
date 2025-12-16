import { useEffect, useRef } from "react";

export default function BackGround({ onReady }) {
  const called = useRef(false);

  const fireOnce = () => {
    if (!called.current) {
      called.current = true;
      console.log("✅ Video ready event fired");
      onReady();
    }
  };

  useEffect(() => {
    // ⛑ fallback if video never fires events
    const timer = setTimeout(() => {
      console.log("⚠️ Video fallback triggered");
      fireOnce();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={fireOnce}
        onLoadedData={fireOnce}
        onCanPlay={fireOnce}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="fixed top-0 left-0 w-full h-full bg-black/30 -z-5" />
    </>
  );
}
