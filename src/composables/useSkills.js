import {
  JavaScriptIcon,
  ReactIcon,
  CssIcon,
  HtmlIcon,
  FoundryIcon,
  ExpressIcon,
  GitIcon,
  HardhatIcon,
  MongodbIcon,
  NodeIcon,
  PythonIcon,
  SolidityIcon,
  VbaIcon,
  SqlIcon,
  TailwindIcon,
  TypescriptIcon,
  VsCodeIcon,
  VueIcon,
  AstroIcon,
  EthersjsIcon,
  MetamaskIcon,
  NextjsIcon,
  EthereumIcon,
  DockerIcon,
  PrismaIcon,
  PostgresqlIcon,
  LangchainIcon,
  ChromadbIcon,
  WindsurfIcon,
} from "@/utils/skillIcons";

// Reorganize skills into a flat array with category information
export const skillsInfo = [
  // Languages
  {
    name: "JavaScript",
    level: 95,
    icon: JavaScriptIcon,
    category: "languages",
  },
  {
    name: "TypeScript",
    level: 85,
    icon: TypescriptIcon,
    category: "languages",
  },
  { name: "Solidity", level: 90, icon: SolidityIcon, category: "languages" },
  { name: "Python", level: 70, icon: PythonIcon, category: "languages" },
  
  // Blockchain
  { name: "Ethereum", level: 85, icon: EthereumIcon, category: "blockchain" },
  { name: "Foundry", level: 80, icon: FoundryIcon, category: "blockchain" },
  { name: "Metamask", level: 90, icon: MetamaskIcon, category: "blockchain" },
  { name: "Hardhat", level: 80, icon: HardhatIcon, category: "blockchain" },
  { name: "ethers.js", level: 85, icon: EthersjsIcon, category: "blockchain" },

  // Frontend
  { name: "React", level: 90, icon: ReactIcon, category: "frontend" },
  { name: "Vue.js", level: 70, icon: VueIcon, category: "frontend" },
  { name: "HTML", level: 65, icon: HtmlIcon, category: "frontend" },
  { name: "CSS", level: 70, icon: CssIcon, category: "frontend" },
  { name: "TailwindCSS", level: 85, icon: TailwindIcon, category: "frontend" },
  { name: "Next.js", level: 80, icon: NextjsIcon, category: "frontend" },
  { name: "Astro", level: 65, icon: AstroIcon, category: "frontend" },

  // Backend
  { name: "Express", level: 80, icon: ExpressIcon, category: "backend" },
  { name: "MongoDB", level: 75, icon: MongodbIcon, category: "backend" },
  // { name: "SQL", level: 70, icon: SqlIcon, category: "backend" },
  { name: "Node.js", level: 80, icon: NodeIcon, category: "backend" },
  { name: "Docker", level: 50, icon: DockerIcon, category: "backend" },
  { name: "Prisma", level: 50, icon: PrismaIcon, category: "backend" },
  { name: "PostgreSQL", level: 50, icon: PostgresqlIcon, category: "backend" },
  { name: "ChromaDB", level: 50, icon: ChromadbIcon, category: "backend" },
  { name: "Langchain", level: 50, icon: LangchainIcon, category: "backend" },
  
  
  
  // Tools
  { name: "Git", level: 90, icon: GitIcon, category: "tools" },
  { name: "VS Code", level: 90, icon: VsCodeIcon, category: "tools" },
  { name: "Windsurf", level: 90, icon: WindsurfIcon, category: "tools" },
  { name: "VBA", level: 95, icon: VbaIcon, category: "tools" },
  // { name: "Pinecone", level: 50, icon: PineconeIcon, category: "tools" },
];
