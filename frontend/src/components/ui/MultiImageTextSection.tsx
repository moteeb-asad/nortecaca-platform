import { MultiImageTextSectionProps } from "@/src/types/ui";
import Button from "@/src/components/ui/Button";

export default function MultiImageTextSection({
  imageSrc,
  imageAlt,
  title,
  description,
  ctaText,
  ctaHref,
}: MultiImageTextSectionProps) {
  return (
    <section className="relative mb-[70px] bg-transparent sm:bg-brand">
      <div className="absolute bottom-0 left-0 h-full w-[32%] bg-white text-[0] hidden sm:block" />
      <div className="relative mx-auto w-full max-w-[1320px] px-0 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-0 sm:gap-12 py-0 sm:py-[80px] md:grid-cols-2">
          <div className="relative mb-[-50px] sm:mb-0">
            <div>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="relative block w-full"
              />
            </div>
          </div>

          <div className="flex justify-center sm:items-center bg-brand sm:bg-transparent text-center sm:text-left">
            <div className="md:ml-[40px] pt-[70px] pb-[40px] sm:pt-0 sm:pb-0">
              <h4 className="mb-[30px] text-[26px] sm:text-[35px] font-semibold text-white max-w-[400px] m-auto sm:m-0 leading-[40px]">
                {title}
              </h4>
              <div className="max-w-[400px] sm:max-w-[500px] text-base leading-[19.5px] text-white">
                <p className="mb-[30px]">{description}</p>
              </div>
              <div>
                <Button
                  href={ctaHref}
                  variant="overlay"
                  className="mt-0 border-[1.5px] sm:mt-[20px]"
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
