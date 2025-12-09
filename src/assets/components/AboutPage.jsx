import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="min-h-screen  text-amber-100 px-6 md:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-amber-300">Me</span>
                    </h1>

                    <p className="text-amber-100 text-lg mb-6 leading-8 font-mono">
                        Hi, I’m <span className="text-amber-300 font-semibold text-[1.3rem]">Sameer P T</span> — a passionate
                        MERN Stack Developer from Kerala, India. I recently graduated with a
                        <span className="text-amber-300 font-semibold"> BCA from Siena College</span> and I’m currently working
                        as a <span className="text-amber-300 font-semibold">MERN Stack Development Intern at DevXtra Academy</span>.
                    </p>

                    <p className="text-amber-100 text-lg leading-relaxed mb-6 font-mono">
                        My interest in web development started during my BCA journey when I began building
                        interactive websites and full-stack applications. Today, I focus on building
                        scalable, performant and visually clean applications using modern web technologies.
                    </p>

                    <div className="flex gap-6 mt-8">
                        <Link
                            to="/projects"
                        >
                            <button className=" font-mono border border-amber-300 px-4 py-2 rounded-2xl hover:bg-amber-300 hover:text-black transition cursor-pointer">
                                View Projects
                            </button>
                        </Link>

                        <a
                            href="#"
                            className="px-4 py-2 border border-amber-300 font-mono rounded-2xl hover:bg-amber-300 hover:text-black transition cursor-pointer"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className=" rounded-2xl px-8 py-5 border border-amber/40"
                >
                    <h2 className="text-2xl font-semibold mb-6">My Tech Stack</h2>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {[
                            "React.js",
                            "Next.js",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "Tailwind CSS",
                            "Git & GitHub",
                            "REST APIs",
                            "JWT Auth",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-transparent rounded-2xl font-mono text-sm text-amber-100 border border-amber-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-4 text-amber-200 font-mono">
                        <p><span className="text-amber-100">BCA Graduate</span> — Siena College</p>
                        <p><span className="text-amber-100">MERN Stack Intern</span> — DevXtra Academy</p>
                        <p>Actively building real-world full-stack projects</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="max-w-6xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {[
                    { label: "Projects Built", value: "3+" },
                    { label: "Tech Stack", value: "MERN" },
                    { label: "Internship", value: "DevXtra" },
                    { label: "Learning Mode", value: "Always" },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className=" rounded-2xl p-6 border border-amber/30"
                    >
                        <h3 className="text-3xl font-bold text-amber-300">{stat.value}</h3>
                        <p className="text-amber-100 mt-2 text-lg">{stat.label}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
