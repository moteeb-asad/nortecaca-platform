import { ReactNode } from "react";

export type MultiImageTextSectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
  ctaText: string;
  ctaHref: string;
};

export type ImageTextSectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  paragraphs: ReactNode[];
  ctaText: string;
  ctaHref: string;
};
