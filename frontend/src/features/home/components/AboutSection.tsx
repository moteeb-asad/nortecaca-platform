import ImageTextSection from "@/src/components/ui/ImageTextSection";

export default function AboutSection() {
  return (
    <ImageTextSection
      imageSrc="/assets/images/sobre.png"
      imageAlt="About us image"
      title="About Us"
      paragraphs={[
        "NORTECAÇA aims to provide hunting enthusiasts with a comprehensive online booking platform offering a wide variety of hunting experiences across the entire national territory, promoting the richness of local hunting traditions.",
        "In addition, we facilitate the scheduling and purchase of hunting trips, simplifying the process for both hunting managers and hunters. With a wide range of hunting options available, NORTECAÇA aspires to become the leading portal for those seeking to explore the best hunting opportunities in Portugal.",
      ]}
      ctaText="Learn More"
      ctaHref="/about"
    />
  );
}
