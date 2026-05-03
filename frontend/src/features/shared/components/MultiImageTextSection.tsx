import Link from "next/link";

export default function MultiImageTextSection() {
  return (
    <section className="relative mb-[70px] bg-brand">
      <div className="absolute bottom-0 left-0 h-full w-[29%] bg-white text-[0]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-[80px] md:grid-cols-2">
          <div className="relative">
            <div>
              <img
                src="/assets/images/multi-img.png"
                alt="Hunting scene"
                className="relative block w-full"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="md:ml-[40px]">
              <h4 className="mb-[30px] text-[35px] font-semibold text-white">
                Queres ser nosso <br />
                parceiro?
              </h4>
              <div className="max-w-[500px] text-base leading-[19.5px] text-white">
                <p className="mb-[30px]">
                  Divulga aqui as tuas zonas de caça. Clica em Contactar,
                  preenche o formulário e deixa-nos algumas fotos. Nós tratamos
                  do resto! Até já!
                </p>
              </div>
              <div>
                <Link
                  href="/contactos"
                  className="mt-[20px] block w-fit rounded-[6px] border-[1.5px] border-[#DF4921] bg-[#DF4921] px-[100px] py-[10px] font-semibold text-white no-underline transition-colors hover:border-white hover:bg-white hover:text-[#DF4921]"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
