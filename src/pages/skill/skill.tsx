

import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"; // shadcn/uiのProgressコンポーネント
import { IconContext } from "react-icons";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "JavaScript", icon: SiJavascript, level: 85 },
      { name: "HTML5", icon: SiHtml5, level: 95 },
      { name: "CSS3", icon: SiCss3, level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 80 },
      { name: "Database", icon: FaDatabase, level: 75 },
      // 他のバックエンドスキル
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "Figma", icon: FaFigma, level: 70 },
      // 他のツールスキル
    ],
  },
];



export const Skill = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Skill</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <Card key={index} className="bg-white p-6 rounded-lg shadow-md">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-gray-900">{category.category}</h2>
            </CardHeader>
            <div className="mt-4">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center mb-4">
                  <IconContext.Provider value={{ className: "w-6 h-6 text-gray-700 mr-4" }}>
                    <skill.icon />
                  </IconContext.Provider>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
