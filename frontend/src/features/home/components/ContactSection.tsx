import MultiImageTextSection from "@/src/components/ui/MultiImageTextSection";

export default function ContactSection() {
  return (
    <MultiImageTextSection
      imageSrc="/assets/images/multi-img.png"
      imageAlt="Hunting scene"
      title={<>Do you want to be our partner?</>}
      description="Promote your hunting areas here. Click Contact, fill out the form, and share a few photos. We take care of the rest. See you soon!"
      ctaText="Contact"
      ctaHref="/contacts"
    />
  );
}
