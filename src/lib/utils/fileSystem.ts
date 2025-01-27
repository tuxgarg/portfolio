import { tushar } from "./devInfo";
import { syncProjectsToFileSystem } from "./syncProjects";

export const fileSystem: FileSystem = {
  home: {
    about: `
${tushar.about}

Programming Languages:
${tushar.code.join(", ")}

Operating Systems:
${tushar.operatingSystems.join(", ")}

Tools Used:
${tushar.toolsUsed.join(", ")}

IDEs:
${tushar.ides.join(", ")}
    `,
    projects: {},
    interests: `
${tushar.interests.join("\n")}
    `,
  },
};

syncProjectsToFileSystem(fileSystem);

export interface FileSystem {
  [key: string]: string | FileSystem;
}
