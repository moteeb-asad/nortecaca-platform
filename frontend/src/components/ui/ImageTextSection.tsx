import { ImageTextSectionProps } from "@/src/types/ui";
import Button from "@/src/components/ui/Button";

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
  ctaText,
  ctaHref,
}: ImageTextSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <img src={imageSrc} alt={imageAlt} className="block w-full" />
          </div>

          <div>
            <h4 className="mb-6 text-3xl font-semibold text-brand md:text-[35px]">
              {title}
            </h4>

            <div className="space-y-5 text-base leading-[1.6] text-[#4F4F4F]">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Button href={ctaHref} className="mt-8">
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
