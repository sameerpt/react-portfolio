import { FaGithub, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa";

export default function UserDetails() {
    return (
        <>
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                    <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
                    </clipPath>
                </defs>
            </svg>

            <div className="relative mt-1">

                <div className="relative flex items-end gap-x-4 p-2">
                    <a
                        href="https://github.com/sameer4712"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            style={{ clipPath: "url(#squircleClip)" }}
                            className="w-12 h-12 bg-linear-to-br from-gray-700 to-gray-900 
              rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 
              cursor-pointer transform transition-all duration-300 ease-out 
              hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <FaGithub size={32} className="text-white" />
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sameer-pt/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            style={{ clipPath: "url(#squircleClip)" }}
                            className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-800 
              rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 
              cursor-pointer transform transition-all duration-300 ease-out 
              hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <FaLinkedin size={32} className="text-white" />
                        </div>
                    </a>

                </div>
            </div>
        </>
    );
}
