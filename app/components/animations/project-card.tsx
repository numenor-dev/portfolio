import { useRef, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    useAnimationControls
} from "motion/react";
import { projects } from "../../lib/static-data";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

const listVariants = {
    hidden: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -0.5,
        }
    },
    visible: {
        transition: {
            staggerChildren: 0.3,
        }
    }
}
const spanVariants = {
    hidden: {
        x: 20,
        opacity: 0,
        transition: {
            x: {
                type: "spring",
                stiffness: 1000,
                damping: 300
            },
            duration: 0.4
        }
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            x: {
                type: "spring",
                stiffness: 75,
                damping: 15,
            },
            duration: 0.4
        }
    }
}

const techVariants = {
    hidden: {
        x: 20,
        opacity: 0,
        transition: {
            x: {
                type: "spring",
                stiffness: 1000,
                damping: 300
            },
            duration: 0.4
        }
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            x: {
                type: "spring",
                stiffness: 75,
                damping: 15,
            },
            duration: 0.8
        }
    }
}

export default function ProjectCard({
    project,
    index,
    total,
    scrollYProgress,
    techDelay
}: {
    project: (typeof projects)[number];
    index: number;
    total: number;
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
    techDelay: number[];
}) {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hasAnimated = useRef(false);

    const center = (total - 1) / 2;
    const stackedRotate = (center * index) * 5;
    const stackedZ = total - index;

    // Stack vertically on scroll
    const spreadY = (index - center) * 225;
    const y = useTransform(scrollYProgress, [0, 0.35], [0, spreadY]);
    const rotate = useTransform(scrollYProgress, [0, 0.4], [stackedRotate, 0]);

    const controls = useAnimationControls();

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        if (v >= 0.35 && !hasAnimated.current) {
            hasAnimated.current = true;
            timeoutRef.current = setTimeout(() => controls.start("visible"), (techDelay[index] ?? 0) * 300);
        } else if (v < 0.35) {
            hasAnimated.current = false;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            controls.start("hidden");
        }
    });

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }
    }, []);

    return (
        <motion.a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute w-[21em] sm:w-md md:w-xl lg:w-[45em] min-h-52 bg-black/80 border-l-2 border-r-2 border-sky-700/80 rounded-3xl p-4 sm:p-6
                     shadow-3xl backdrop-blur-sm cursor-pointer flex flex-col
                     hover:border-sky-300/40 transition-colors overflow-hidden"
            style={{ y, rotate, zIndex: stackedZ }}
        >
            <ArrowTopRightOnSquareIcon className="absolute top-4 right-2 md:top-5 md:right-5 ml-1 size-3 md:size-4" />
            <span className="text-lg md:text-2xl mt-1 md:mt-0 mb-3 font-bold tracking-tighter text-zinc-200/90">
                {project.title}
            </span>
            <p className="text-xs md:text-base text-zinc-200/80 leading-relaxed">
                {project.desc}
            </p>
            <motion.ul
                className="flex flex-row flex-wrap items-center mt-7"
                initial="hidden"
                animate={controls}
                variants={listVariants}
            >
                <motion.span
                    className="pr-2 text-xs md:text-sm md:tracking-wide"
                    variants={spanVariants}
                >
                    Built with:
                </motion.span>
                {project.tech.map((tech, i) => (
                    <motion.li
                        key={tech}
                        className="text-xs md:text-sm text-sky-400/80 md:tracking-wide"
                        variants={techVariants}
                    >
                        <span>{tech}</span>
                        {i !== project.tech.length - 1 && (
                            <span className="mx-2" aria-hidden="true">+</span>
                        )}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.a>
    );
}