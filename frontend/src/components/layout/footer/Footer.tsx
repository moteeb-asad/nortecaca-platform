import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-brand text-left">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-[50px] lg:grid-cols-3">
          <div>
            <div className="mb-[25px]">
              <img src="/assets/images/footer-logo.png" alt="Nortecaca logo" />
            </div>
            <div className="max-w-[325px] text-base font-normal text-white">
              NorteCaca provides a wide list of hunts across the country, with
              options to reserve spots or promote new hunting areas.
            </div>
            <div>
              <ul className="mt-[30px] flex list-none gap-[15px] p-0">
                <li>
                  <a href="#" aria-label="Instagram">
                    <img src="/assets/images/insta.png" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="YouTube">
                    <img src="/assets/images/youtube.png" alt="YouTube" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter">
                    <img src="/assets/images/twitter.png" alt="Twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="mx-auto max-w-[200px]">
              <h6 className="mb-[25px] text-base font-semibold text-white">
                Company
              </h6>
              <ul className="m-0 list-none space-y-[5px] p-0">
                <li>
                  <Link href="/about" className="text-white no-underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/hunts" className="text-white no-underline">
                    Hunts
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white no-underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partnerships"
                    className="text-white no-underline"
                  >
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="mb-[25px] text-base font-semibold text-white">
              Contacts
            </h6>
            <div>
              <div className="mb-[10px] flex items-center gap-[15px]">
                <img src="/assets/images/phone.png" alt="Phone" />
                <div>
                  <span className="block text-xs text-[#E0E0E0]">Mobile</span>
                  <a
                    href="tel:+351910000000"
                    className="text-base font-normal text-white no-underline"
                  >
                    +351 910 000 000
                  </a>
                </div>
              </div>

              <div className="mb-[10px] flex items-center gap-[15px]">
                <img src="/assets/images/mail.png" alt="Email" />
                <div>
                  <span className="block text-xs text-[#E0E0E0]">Email</span>
                  <a
                    href="mailto:info@mail.com"
                    className="text-base font-normal text-white no-underline"
                  >
                    info@mail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 text-center">
          <div className="pb-[15px] pt-[12px]">
            <p className="m-0 text-center text-xs leading-[14.63px] text-white">
              Copyright &copy; 2026. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
