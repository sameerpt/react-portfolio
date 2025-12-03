export default function BackGround() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mov" type="video/mp4" />
      </video>

      <div className="fixed top-0 left-0 w-full h-full bg-black/30 -z-5"></div>
    </>
  );
}
