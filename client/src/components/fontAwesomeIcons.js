import { 
  faLinkedin, 
  faSquareGithub, 
  faSquareXTwitter, 
  faSquareReddit, 
  faLeetcode, 
  faHackerrank,
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faNodeJs,
  faJava,
  faPython,
  faDocker,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';

import { 
  faLocationDot, 
  faPhone, 
  faEnvelope as fasEnvelope,
  faDiagramProject,
  faTrophy,
  faBrain,
  faNetworkWired,
  faTerminal,
  faRobot,
  faBolt,
  faArrowPointer,
  faWandMagicSparkles,
  faServer,
  faDatabase,
  faCode,
  faPaperPlane,
  faArrowsRotate,
  faFileCode,
  faGlobe,
  faCubes,
  faMicrochip,
  faWifi,
  faSitemap,
  faGraduationCap,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';

import { 
  faEnvelope as farEnvelope 
} from '@fortawesome/free-regular-svg-icons';

// High-fidelity definition for 4-pointed sparkle icon (fa-sparkles)
export const faSparkles = {
  prefix: 'fas',
  iconName: 'sparkles',
  icon: [
    512, 512, [], 'f890',
    'M256 0c14.1 0 25.6 11.5 25.6 25.6l0 47.9C281.6 170.8 341.2 230.4 438.5 230.4l47.9 0c14.1 0 25.6 11.5 25.6 25.6s-11.5 25.6-25.6 25.6l-47.9 0c-97.3 0-156.9 59.6-156.9 156.9l0 47.9c0 14.1-11.5 25.6-25.6 25.6s-25.6-11.5-25.6-25.6l0-47.9C230.4 341.2 170.8 281.6 73.5 281.6l-47.9 0C11.5 281.6 0 270.1 0 256s11.5-25.6 25.6-25.6l47.9 0c97.3 0 156.9-59.6 156.9-156.9l0-47.9C230.4 11.5 241.9 0 256 0z'
  ]
};

export const byPrefixAndName = {
  fab: {
    'linkedin': faLinkedin,
    'square-github': faSquareGithub,
    'github': faSquareGithub,
    'square-x-twitter': faSquareXTwitter,
    'x-twitter': faSquareXTwitter,
    'twitter': faSquareXTwitter,
    'square-reddit': faSquareReddit,
    'reddit': faSquareReddit,
    'leetcode': faLeetcode,
    'hackerrank': faHackerrank,
    'react': faReact,
    'js': faJs,
    'javascript': faJs,
    'html5': faHtml5,
    'css3': faCss3Alt,
    'css3-alt': faCss3Alt,
    'bootstrap': faBootstrap,
    'node': faNodeJs,
    'node-js': faNodeJs,
    'java': faJava,
    'python': faPython,
    'docker': faDocker,
    'git': faGitAlt,
    'git-alt': faGitAlt,
  },
  fass: {
    'location-dot': faLocationDot,
  },
  fas: {
    'diagram-project': faDiagramProject,
    'trophy': faTrophy,
    'brain': faBrain,
    'network-wired': faNetworkWired,
    'terminal': faTerminal,
    'robot': faRobot,
    'bolt': faBolt,
    'sparkles': faSparkles,
    'wand-magic-sparkles': faWandMagicSparkles,
    'arrow-pointer': faArrowPointer,
    'mouse-pointer': faArrowPointer,
    'location-dot': faLocationDot,
    'phone': faPhone,
    'phone-arrow-right': faPhone,
    'envelope': fasEnvelope,
    'server': faServer,
    'database': faDatabase,
    'code': faCode,
    'paper-plane': faPaperPlane,
    'arrows-rotate': faArrowsRotate,
    'file-code': faFileCode,
    'globe': faGlobe,
    'cubes': faCubes,
    'microchip': faMicrochip,
    'wifi': faWifi,
    'sitemap': faSitemap,
    'graduation-cap': faGraduationCap,
    'briefcase': faBriefcase,
  },
  far: {
    'phone-arrow-right': faPhone,
    'envelope': farEnvelope,
  },
};
