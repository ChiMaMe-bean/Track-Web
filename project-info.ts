/**
 * Track-Web Project Information
 * 
 * This is a VuePress 2.0 project using:
 * - TypeScript for type safety
 * - Vue 3 for the frontend framework
 * - vuepress-theme-plume for the theme
 * - Vite as the build tool
 * - Sass for CSS preprocessing
 */

export interface ProjectInfo {
  name: string;
  version: string;
  description: string;
  technologies: string[];
  repository: string;
}

export const projectInfo: ProjectInfo = {
  name: 'Track-Web',
  version: '1.0.0',
  description: '基于 VuePress 2.0 和 vuepress-theme-plume 主题构建的静态文档网站',
  technologies: [
    'VuePress 2.0',
    'TypeScript',
    'Vue 3',
    'vuepress-theme-plume',
    'Vite',
    'Sass'
  ],
  repository: 'https://github.com/ChiMaMe-bean/Track-Web'
};

export default projectInfo; 