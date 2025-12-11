import HTMLIcon from "../assets/icons/skills/html.svg?react";
import CssIcon from "../assets/icons/skills/css.svg?react";
import SassIcon from "../assets/icons/skills/sass.svg?react";
import BootstrapIcon from "../assets/icons/skills/bootstrap.svg?react";
import ResponsiveIcon from "../assets/icons/skills/responsive.svg?react";
import JSIcon from "../assets/icons/skills/js.svg?react";
import ReactIcon from "../assets/icons/skills/atom.svg?react";
import ReduxIcon from "../assets/icons/skills/redux.svg?react";
import GitIcon from "../assets/icons/skills/git.svg?react";
import GitHubIcon from "../assets/icons/skills/github.svg?react";
import HostingIcon from "../assets/icons/skills/upload.svg?react";
import GulpIcon from "../assets/icons/skills/gulp.svg?react";
import FigmaIcon from "../assets/icons/skills/figma.svg?react";
import PhotoshopIcon from "../assets/icons/skills/photoshop.svg?react";
import DockerIcon from "../assets/icons/skills/docker.svg?react";
import InkscapeIcon from "../assets/icons/skills/inkscape.svg?react";

const iconsMap = {
  html: HTMLIcon,
  css: CssIcon,
  scss: SassIcon,
  bootstrap: BootstrapIcon,
  responsive: ResponsiveIcon,
  js: JSIcon,
  react: ReactIcon,
  redux: ReduxIcon,
  git: GitIcon,
  github: GitHubIcon,
  docker: DockerIcon,
  hosting: HostingIcon,
  gulp: GulpIcon,
  figma: FigmaIcon,
  photoshop: PhotoshopIcon,
  inkscape: InkscapeIcon,
};

export const SkillsIcons = ({ name }) => {
  const IconComponent = iconsMap[name] || ReactIcon;
  return <IconComponent />;
};
