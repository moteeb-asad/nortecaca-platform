import { ReactNode } from "react";

export type MultiImageTextSectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
  ctaText: string;
  ctaHref: string;
};
