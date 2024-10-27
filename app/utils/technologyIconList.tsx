import { iconType } from "../types";
import {
  JavascriptSVG,
  TypescriptSVG,
  AngularSVG,
  ReactSVG,
  TailwindSVG,
  ExpressSVG,
  AwsSVG,
  MongoDBSVG,
  NextJsSVG,
  SQLSVG,
  NodeSVG,
  DockerSVG,
} from "../components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "JavaScript",
    icon: (
      <JavascriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <TypescriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <ReactSVG
        color={color}
        size={35}
      />
    ),
  },

  {
    name: "Next Js",
    icon: (
      <NextJsSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Angular",
    icon: (
      <AngularSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <TailwindSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "SQL",
    icon: (
      <SQLSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Aws",
    icon: (
      <AwsSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Node Js",
    icon: (
      <NodeSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Express",
    icon: (
      <ExpressSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <MongoDBSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Docker",
    icon: (
      <DockerSVG
        color={color}
        size={35}
      />
    ),
  }
];
