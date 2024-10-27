import {
  AntdSVG,
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  AwsSVG,
  ReactHookFormSVG,
  ReactSVG,
  SassSVG,
  ShadcnLandingSVG,
  DockerSVG,
  ShopApiSVG,
  Sk8terSVG,
  SwaggerSVG,
  TailwindSVG,
  TypescriptSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <Sk8terSVG />,
    title: "AI Video Content Generator",
    subtitle: "Landing page template",
    technologies: [
      {
        name: "Next",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Javascript",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Google Text-to-Speech",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Neon DB",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Assembly AI ",
        icon: <DockerSVG color="#000000" size={16} />,
      },
      {
        name: "Remotion.js",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
      {
        name: "Shadcn UI",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },

    ],
    description:
      "This AI-powered video content generator allows users to effortlessly create dynamic videos from simple prompts. Users can choose the type of story, select a video theme, customize the AI voice for narration, and set the desired video duration. Once the inputs are selected, the AI generates a complete video, including visuals, audio, and captions, providing a seamless and creative video production experience. The platform simplifies the entire process, making it easy for anyone to produce high-quality, professional videos without any technical skills.",
    imgUrl: "/video-generator.png",
    videoUrl: "/videos/shadcn-landing-page.mp4",
    githubUrl: "https://github.com/shubhampr07/video-generator",
    websiteUrl: "https://github.com/shubhampr07/video-generator",
  },
  {
    icon: <Sk8terSVG />,
    title: "Veeme",
    subtitle: "Restaurant Menu",
    technologies: [
      {
        name: "React",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Typescript",
        icon: <NextSVG color="#000" size={16} />,
      },
      {
        name: "Nodejs",
        icon: <CSSSVG color="#1572B6" size={16} />,
      },
      {
        name: "Expressjs",
        icon: <AntdSVG color="#1d93ff" size={16} />,
      },
      {
        name: "Socket.io",
        icon: <AntdSVG color="#1d93ff" size={16} />,
      },
      {
        name: "WebRtc",
        icon: <AntdSVG color="#1d93ff" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <AntdSVG color="#1d93ff" size={16} />,
      },
    ],
    description:
      "This anonymous video chat and call app allows users to connect with anyone across the globe while maintaining complete anonymity. Users can instantly start video chats or calls with random people without the need to reveal their identity or personal information. The app ensures seamless communication with high-quality video and audio, making it easy to engage with strangers securely. By prioritizing user privacy, the platform offers a safe and engaging space for spontaneous conversations with people from all over the world, fostering global connections while preserving anonymity.",
    imgUrl: "/veeme.png",
    videoUrl: "/videos/magenta.mp4",
    githubUrl: "https://github.com/shubhampr07/veeme-frontend-updated",
    websiteUrl: "https://www.veeme.in/",
  },
  {
    icon: <Sk8terSVG />,
    title: "Genius AI",
    subtitle: "E-commerse back-end",
    technologies: [
      {
        name: "Nextjs",
        icon: <JavascriptSVG color="#F7DF1E" size={16} />,
      },
      {
        name: "TypeScript",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Replicate AI",
        icon: <ExpressSVG color="#000000" size={16} />,
      },
      {
        name: "Prisma",
        icon: <ExpressSVG color="#000000" size={16} />,
      },
      {
        name: "Supabase",
        icon: <MongoDBSVG color="#47A248" size={16} />,
      },
      {
        name: "Stripe",
        icon: <MongooseSVG color="#880000" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <SwaggerSVG color="#85EA2D" size={16} />,
      },
      {
        name: "Crisp",
        icon: <SwaggerSVG color="#85EA2D" size={16} />,
      },
    ],
    description:
      "This SaaS AI application provides an all-in-one solution for generating code, images, music, videos, and engaging in real-time AI-powered chat. Tailored for developers, creators, and businesses, the platform offers a range of creative tools powered by advanced AI models to streamline content creation and software development. Users can easily generate high-quality assets or solutions through simple prompts, enhancing productivity and creativity. The app operates on a subscription model, offering flexible plans that cater to various needs, from casual users to professionals seeking unlimited access to its powerful AI capabilities.",
    imgUrl: "/genius.png",
    videoUrl: "",
    githubUrl: "https://github.com/shubhampr07/Saas-ai",
    websiteUrl: "https://geniuss.vercel.app/",
  },
  {
    icon: <Sk8terSVG />,
    title: "Vercel Clone",
    subtitle: "E-commerse back-end",
    technologies: [
      {
        name: "Nextjs",
        icon: <JavascriptSVG color="#F7DF1E" size={16} />,
      },
      {
        name: "Javascript",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Nodejs",
        icon: <SwaggerSVG color="#85EA2D" size={16} />,
      },
      {
        name: "Expressjs",
        icon: <SwaggerSVG color="#85EA2D" size={16} />,
      },
      {
        name: "Docker",
        icon: <ExpressSVG color="#000000" size={16} />,
      },
      {
        name: "Redis",
        icon: <ExpressSVG color="#000000" size={16} />,
      },
      {
        name: "Socket.io",
        icon: <MongoDBSVG color="#47A248" size={16} />,
      },
      {
        name: "AWS",
        icon: <MongooseSVG color="#880000" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <SwaggerSVG color="#85EA2D" size={16} />,
      }
    ],
    description:
      "This Vercel Clone project replicates the core functionality of the Vercel platform, enabling seamless deployment and hosting of modern web applications. It simplifies the process of managing and deploying projects with features like automatic builds, custom domains, and serverless functions. This clone provides an efficient environment for developers to rapidly deploy their web apps with ease and scalability.",
    imgUrl: "/vercel.png",
    videoUrl: "",
    githubUrl: "https://github.com/shubhampr07/vercel-clone",
    websiteUrl: "https://github.com/shubhampr07/vercel-clone",
  },
  {
    icon: <Sk8terSVG />,
    title: "Crawl",
    subtitle: "E-commerce",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavascriptSVG color="#F7DF1E" size={16} />,
      },
      {
        name: "React",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Nodejs",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Expressjs",
        icon: <SassSVG color="#CC6699" size={16} />,
      },

      {
        name: "Tailwind",
        icon: <AwsSVG color="#06B6D4" size={16} />,
      },
    ],
    description:
      "This App allows users to search and crawl GitHub repositories for specific items like API keys, secrets, or sensitive information. It automates the process of scanning codebases to identify potential security risks or exposed credentials. This tool is ideal for developers or security professionals aiming to enhance code security by detecting vulnerabilities in public or private repositories.",
    imgUrl: "/crawl.jpg",
    videoUrl: "/videos/sk8ter.mp4",
    githubUrl: "https://github.com/shubhampr07/Github-Crawl",
    websiteUrl: "https://github.com/shubhampr07/Github-Crawl",
  },
  {
    icon: <Sk8terSVG />,
    title: "3D T-Shirt Design",
    subtitle: "E-commerce",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavascriptSVG color="#F7DF1E" size={16} />,
      },
      {
        name: "React",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Nodejs",
        icon: <AwsSVG color="#06B6D4" size={16} />,
      },
      {
        name: "Expressjs",
        icon: <AwsSVG color="#06B6D4" size={16} />,
      },
      {
        name: "Threejs",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Framer Motion",
        icon: <SassSVG color="#CC6699" size={16} />,
      },
      {
        name: "Cloudinary",
        icon: <AwsSVG color="#06B6D4" size={16} />,
      },
    ],
    description:
      "This App allows users to search and crawl GitHub repositories for specific items like API keys, secrets, or sensitive information. It automates the process of scanning codebases to identify potential security risks or exposed credentials. This tool is ideal for developers or security professionals aiming to enhance code security by detecting vulnerabilities in public or private repositories.",
    imgUrl: "/tshirtdesigner.png",
    videoUrl: "/videos/sk8ter.mp4",
    githubUrl: "https://github.com/shubhampr07/3D-Design-Maker",
    websiteUrl: "https://3d-tshirt-designer.netlify.app/",
  },
];
