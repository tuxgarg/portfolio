export interface Developer {
  // name: string;
  // role: string;
  // company: string;
  about: string;
  code: string[];
  interests: string[];
  operatingSystems: string[];
  toolsUsed: string[];
  ides: string[];
}

export const tushar: Developer = {
  about: "Hi, I'm Tushar Garg, a passionate Full-Stack Developer with expertise in building production-ready web and mobile applications. I specialize in creating seamless user experiences and robust backend systems.",
  code: ["JavaScript", "TypeScript", "React.js", "Node.js", "React Native", "Express.js", "Python", "FastAPI", "HTML", "CSS"],
  interests: [
    "Web Development",
    "Mobile App Development",
    "System Design",
    "Learning New Technologies",
    "Open Source Contributions",
  ],
  operatingSystems: ["Windows", "macOS", "Ubuntu"],
  toolsUsed: ["Docker", "Git", "Postman", "Figma", "Swagger"],
  ides: ["VSCode", "Android Studio", "Xcode", "PyCharm", "WebStorm"],
};