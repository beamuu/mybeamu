interface Project extends EachProjectCardProps {
  
}

interface EachProjectCardProps {
  title: string;
  description: string;
  href: string;
  imgSrc?: string;
  disableImgBorder?: boolean;
  demoUrl?: string;
  wrapup?: string;
  labels?: string[];
}