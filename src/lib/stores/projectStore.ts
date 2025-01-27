import { writable } from 'svelte/store';
import type { ProjectData } from '../types/projectType';

const initialProjects: ProjectData[] = [
  {
    id: 'smart-baroda',
    name: 'Smart Baroda',
    icon: 'nodejs',
    shortDescription: 'Personalized content generation app for banking system',
    githubUrl: 'https://github.com/kamalyash2002/SmartBaroda',
    readmeUrl: 'https://raw.githubusercontent.com/kamalyash2002/SmartBaroda/refs/heads/final-submission/README.md',
    technologies: ['GenAI', 'Node.js', 'Azure', 'MongoDB', 'OpenAI', 'Kotlin'],
    type: 'application'
  },
  {
    id: 'get-react-template',
    name: 'get-react-template',
    icon: 'javascript',
    shortDescription: 'CLI tool designed to help you quickly set up a variety of project templates including React, Vite, Tailwind',
    githubUrl: 'https://github.com/tuxgarg/get-react-template',
    readmeUrl: 'https://raw.githubusercontent.com/tuxgarg/get-react-template/refs/heads/main/README.md',
    technologies: ['JavaScript', 'npm'],
    type: 'library'
  },
  {
    id: 'key-vault',
    name: 'Key Vault',
    icon: 'electronjs',
    shortDescription: 'A secure and convenient tool designed to help you manage your passwords and keep your sensitive information safe.',
    githubUrl: 'https://github.com/tuxgarg/keyVault',
    readmeUrl: 'https://raw.githubusercontent.com/tuxgarg/keyVault/refs/heads/main/README.md',
    technologies: ['Electronjs', 'React'],
    type: 'application'
  },
  {
    id: 'task-manager',
    name: 'Task Manager',
    icon: 'reactjs',
    shortDescription: 'A simple yet powerful task management application built with React Native',
    githubUrl: 'https://github.com/tuxgarg/task-manager',
    readmeUrl: 'https://raw.githubusercontent.com/tuxgarg/task-manager/refs/heads/main/README.md',
    technologies: ['React Native'],
    type: 'application'
  },
  {
    id: 'urhome',
    name: 'urHome',
    icon: 'chrome',
    shortDescription: 'A productive homepage extension for chrome browser',
    githubUrl: 'https://github.com/tuxgarg/urHome--Chrome_Extenstion',
    readmeUrl: 'https://raw.githubusercontent.com/tuxgarg/urHome--Chrome_Extenstion/refs/heads/main/Readme.md',
    technologies: ['HTML','JavaScript','Chrome develpoer API'],
    type: 'application'
  },
];

export const projects = writable<ProjectData[]>(initialProjects);