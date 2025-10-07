import Lenis from "@studio-freight/lenis";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { TextHoverEffect } from "./text-hover-effect.tsx";
import { HoverBorderGradient } from "./hover-border-gradient.tsx";
import parallex_image from '../assets/Parallex_project.png'




export const SmoothScrollHero = () => {

    
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // cleanup on unmount
    return () => lenis.destroy();
  }, []);



  return (
    <div className="bg-zinc-950">
        <Hero />
        <Schedule />
        <TextHoverEffect text="SAIRAM" />
        
    </div>
  );
};


const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
         `url(${parallex_image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl  pt-[200px]">
      <ParallaxImg
        src="https://icon.icepanel.io/Technology/svg/React.svg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="m-1 w-1/6"
      />
      
      <ParallaxImg
        src="https://icon.icepanel.io/Technology/svg/Go.svg"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://icon.icepanel.io/Technology/svg/Apache-Hadoop.svg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};






const Schedule = () => {
  const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experience. Built with React and TailwindCSS, fully responsive and optimized for performance.",
    tech: "React, TailwindCSS",
    link: "https://example.com/portfolio",
    image:
      "https://images.unsplash.com/photo-1759588032622-1388cf9505ad?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E-commerce App",
    description:
      "A fully functional e-commerce application with product catalog, cart, and checkout system. Integrated with Next.js for server-side rendering and MongoDB for database management.",
    tech: "Next.js, Node.js, MongoDB",
    link: "https://example.com/ecommerce",
    image:
      "https://plus.unsplash.com/premium_photo-1749666992717-2818dd728418?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blog platform that allows users to create, edit, and publish articles. Powered by Gatsby for fast static site generation and GraphQL for flexible content querying.",
    tech: "Gatsby, GraphQL",
    link: "https://example.com/blog",
    image:
      "https://plus.unsplash.com/premium_photo-1749666992717-2818dd728418?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application built with React Native and Firebase. Features include private messaging, group chats, and push notifications for a seamless mobile experience.",
    tech: "React Native, Firebase",
    link: "https://example.com/chat",
    image:
      "https://plus.unsplash.com/premium_photo-1749666992717-2818dd728418?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-6xl px-2 py-10 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-12 text-5xl font-black uppercase  font-semibold text-center"
      >
        Projects List
      </motion.h1>

      <div className="flex flex-col gap-10">
        {projects.map((proj, index) => (
          <ScheduleItem
            key={index}
            title={proj.title}
            tech={proj.tech}
            description={proj.description}
            link={proj.link}
            image={proj.image}
          />
        ))}
      </div>
    </section>
  );
};



const ScheduleItem = ({ title, tech, link, image, description }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="flex flex-col md:flex-row-reverse items-center gap-6 border-b border-zinc-800 pb-6"
    >
      {/* Project Image on Right */}
      <div className="w-full md:w-52 h-52  flex-shrink-0 overflow-hidden rounded-xl">

        <img
            
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 "
        />
      </div>

      {/* Project Details on Left */}
      <div className="flex flex-col gap-2 flex-1 text-left">
        <p className="text-2xl font-semibold text-cyan-300">{title}</p>
        <p className="text-sm uppercase text-zinc-400">{tech}</p>

        <p className="text-md  text-zinc-300  text-balance pr-10">{description}</p>

        
        <div className="mt-2">
        <HoverBorderGradient containerClassName="rounded-full" as="button" className="bg-black   text-white flex items-center space-x-2 ">
         <AceternityLogo />
        <span>View Project </span>

        </HoverBorderGradient>
        </div>
      </div>
    </motion.div>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3  dark:text-cyan-300"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="9"
        strokeMiterlimit="3.86874"
      />
    </svg>
  );
};

