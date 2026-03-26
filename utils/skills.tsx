import {
  Code,
  Cpu,
  Database,
  Globe,
  Zap,
  Settings,
  Server,
  CircuitBoard,
  Shield,
  Cloud,
  Terminal,
  Smartphone,
  Brain,
} from "lucide-react";
import { ReactNode } from "react";

interface Skill {
  id: string;
  label: string;
  icon: ReactNode;
}

export const company_skills: Skill[] = [
  // Frontend
  { id: "react", label: "React.js", icon: <Code className="w-3 h-3" /> },
  { id: "next", label: "Next.js", icon: <Globe className="w-3 h-3" /> },
  { id: "javascript", label: "JavaScript", icon: <Code className="w-3 h-3" /> },
  { id: "typescript", label: "TypeScript", icon: <Code className="w-3 h-3" /> },
  { id: "html", label: "HTML5", icon: <Code className="w-3 h-3" /> },
  { id: "css", label: "CSS3", icon: <Code className="w-3 h-3" /> },
  { id: "tailwind", label: "Tailwind CSS", icon: <Code className="w-3 h-3" /> },
  { id: "redux", label: "Redux", icon: <Code className="w-3 h-3" /> },

  // Backend
  { id: "node", label: "Node.js", icon: <Server className="w-3 h-3" /> },
  { id: "express", label: "Express.js", icon: <Server className="w-3 h-3" /> },
  {
    id: "api",
    label: "API Development",
    icon: <Database className="w-3 h-3" />,
  },
  { id: "rest", label: "REST APIs", icon: <Database className="w-3 h-3" /> },
  { id: "graphql", label: "GraphQL", icon: <Database className="w-3 h-3" /> },

  // Database
  { id: "mongodb", label: "MongoDB", icon: <Database className="w-3 h-3" /> },
  { id: "mysql", label: "MySQL", icon: <Database className="w-3 h-3" /> },
  {
    id: "postgresql",
    label: "PostgreSQL",
    icon: <Database className="w-3 h-3" />,
  },
  { id: "firebase", label: "Firebase", icon: <Database className="w-3 h-3" /> },

  // DevOps / Tools
  {
    id: "git",
    label: "Git & Version Control",
    icon: <Settings className="w-3 h-3" />,
  },
  { id: "github", label: "GitHub", icon: <Settings className="w-3 h-3" /> },
  { id: "docker", label: "Docker", icon: <Cloud className="w-3 h-3" /> },
  { id: "aws", label: "AWS", icon: <Cloud className="w-3 h-3" /> },
  { id: "ci_cd", label: "CI/CD", icon: <Settings className="w-3 h-3" /> },
  { id: "linux", label: "Linux", icon: <Terminal className="w-3 h-3" /> },

  // Programming Languages
  { id: "java", label: "Java", icon: <Code className="w-3 h-3" /> },
  { id: "python", label: "Python", icon: <Code className="w-3 h-3" /> },
  { id: "c", label: "C", icon: <Code className="w-3 h-3" /> },
  { id: "cpp", label: "C++", icon: <Code className="w-3 h-3" /> },

  // Mobile / App
  {
    id: "android",
    label: "Android Development",
    icon: <Smartphone className="w-3 h-3" />,
  },
  {
    id: "react_native",
    label: "React Native",
    icon: <Smartphone className="w-3 h-3" />,
  },

  // Security
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    id: "auth",
    label: "Authentication & Authorization",
    icon: <Shield className="w-3 h-3" />,
  },

  // AI / Data
  {
    id: "ai",
    label: "Artificial Intelligence",
    icon: <Brain className="w-3 h-3" />,
  },
  { id: "ml", label: "Machine Learning", icon: <Brain className="w-3 h-3" /> },
  {
    id: "data_analysis",
    label: "Data Analysis",
    icon: <Database className="w-3 h-3" />,
  },

  // General Tech
  { id: "debugging", label: "Debugging", icon: <Zap className="w-3 h-3" /> },
  { id: "testing", label: "Testing", icon: <Zap className="w-3 h-3" /> },
  {
    id: "performance",
    label: "Performance Optimization",
    icon: <Zap className="w-3 h-3" />,
  },

  // Hardware / Engineering
  {
    id: "hardware",
    label: "Hardware Engineering",
    icon: <Cpu className="w-3 h-3" />,
  },
  {
    id: "electronics",
    label: "Electronics",
    icon: <CircuitBoard className="w-3 h-3" />,
  },
  {
    id: "embedded",
    label: "Embedded Systems",
    icon: <Cpu className="w-3 h-3" />,
  },
  { id: "iot", label: "IoT", icon: <CircuitBoard className="w-3 h-3" /> },
];
