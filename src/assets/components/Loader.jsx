export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
      <div className="snake-loader flex justify-center items-center">
        <span></span><span></span><span></span><span></span>
      </div>
      <p className="text-amber-300 font-mono text-lg mt-6 ml-14 animate-pulse">
        Portfolio is loading...
      </p>

    </div>
  );
}
