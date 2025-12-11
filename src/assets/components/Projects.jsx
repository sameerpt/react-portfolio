import { motion } from "framer-motion";

export default function Projects() {

    const letsellrImages = [
        "/letsellr1.png",
        "/letsellr2.png",
        "/letsellr3.png",
        "/letsellr4.png",
    ];

    const instavizImages = [
        "/instaviz1.png",
        "/instaviz2.png",
        "/instaviz3.png",
        "/instaviz4.png",
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const imgAnim = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.55, ease: [0.3, 1, 0.4, 1] }
        },
    };

    return (
        <div className="text-white px-6 mt-14 flex flex-col gap-28">

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >

                <motion.h1 variants={fadeUp} className="md:text-5xl text-4xl font-bold font-mono md:mb-8 -mb-14 text-amber-200">
                    Letsellr
                </motion.h1>

                <div className="grid grid-cols-12 gap-5">

                    <motion.img
                        variants={imgAnim}
                        src={letsellrImages[0]}
                        className="col-span-12 md:col-span-7 h-[420px] -mb-28 md:mb-0 object-contain"
                    />

                    <motion.img
                        variants={imgAnim}
                        src={letsellrImages[1]}
                        className="col-span-12 md:col-span-5 h-[420px]  object-cover"
                    />

                    <motion.img
                        variants={imgAnim}
                        src={letsellrImages[2]}
                        className="col-span-12 md:col-span-6 h-[260px] md:-mt-7 md:ml-9  object-cover"
                    />

                    <motion.img
                        variants={imgAnim}
                        src={letsellrImages[3]}
                        className="col-span-12 md:col-span-6 h-[260px]  object-cover"
                    />
                </div>

                <motion.p
                    variants={fadeUp}
                    className="mt-6 md:mt-10 md:text-[1.3rem] opacity-80 leading-relaxed font-mono text-amber-100 text-left"
                >
                    A complete rental and listing platform with an advanced admin dashboard,
                    seller portal, verification system, and integrated payment workflow. Users
                    can buy, sell, or lease land at affordable prices, making the platform
                    accessible and easy to use for everyone. The interface is designed for
                    smooth navigation, allowing you to explore properties and manage listings
                    effortlessly according to your preferred budget.
                </motion.p>

                <a
                    href="https://letsellr.in"
                    target="_blank"
                    className="group flex items-center justify-center my-10 max-w-48 py-3 rounded-xl 
             bg-white/10 border border-white/20 backdrop-blur text-amber-200 
             font-mono tracking-wide transition-all duration-300 hover:bg-amber-300 hover:text-black"
                >
                    Visit Letsellr
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </a>

            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >

                <motion.h1 variants={fadeUp} className="md:text-5xl text-4xl> font-bold mb-13 text-amber-200 font-mono">
                    InstaviZ
                </motion.h1>

                <div className="grid grid-cols-12 gap-5">

                    <motion.img
                        variants={imgAnim}
                        src={instavizImages[0]}
                        className="col-span-12 md:col-span-7 order-2 md:order-1 h-[420px] object-contain -mt-28 md:-mt-5  "
                    />

                    <motion.img
                        variants={imgAnim}
                        src={instavizImages[3]}
                        className="col-span-12 md:col-span-5 order-1 md:order-2 h-[420px]  object-cover"
                    />

                    <motion.img
                        variants={imgAnim}
                        src={instavizImages[1]}
                        className="col-span-12 md:col-span-6 h-[260px] object-cover"
                    />

                    <motion.img
                        variants={imgAnim}
                        src={instavizImages[2]}
                        className="col-span-12 md:col-span-6 h-[260px]  object-cover"
                    />
                </div>

                <motion.p
                    variants={fadeUp}
                    className="md:mt-6 -mt-19 md:text-[1.3rem] opacity-80 leading-relaxed font-mono text-amber-100 text-left"
                >
                    A visualization platform used for real-time analytics, dashboards, and
                    monitoring complex datasets. This is the place where you can upload your CSV
                    files and instantly visualize them with dynamic chart representations. The
                    system also generates a detailed summary of your data, helping you understand
                    patterns at a glance. With the power of InstaViz AI, you can even chat with
                    your data — ask questions, explore trends, and receive intelligent insights
                    in real time.
                </motion.p>

                <a
                    href="https://nextjs-instaviz.vercel.app"
                    target="_blank"
                    className="group flex items-center justify-center my-10 max-w-48 py-3 rounded-xl 
             bg-white/10 border border-white/20 backdrop-blur text-amber-200 
             font-mono tracking-wide transition-all duration-300 hover:bg-amber-300 hover:text-black"
                >
                    Visit InstaviZ
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </a>



            </motion.div>

        </div>
    );
}
