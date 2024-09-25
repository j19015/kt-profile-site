import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const portfolioData = [
  {
    id: 1,
    title: "プロジェクト名 1",
    description: "プロジェクト1の詳細な説明文。機能や使用技術などを含めて記載します。",
    image: "https://via.placeholder.com/400x300", // プロジェクトの画像URL
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.live",
  },
  {
    id: 2,
    title: "プロジェクト名 2",
    description: "プロジェクト2の詳細な説明文。機能や使用技術などを含めて記載します。",
    image: "https://via.placeholder.com/400x300",
    tags: ["Next.js", "TypeScript", "GraphQL"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.live",
  },
  // 他のプロジェクトも同様に追加
];

// src/pages/Portfolio.jsx

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((project) => (
          <Card key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <CardFooter className="p-4 flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
