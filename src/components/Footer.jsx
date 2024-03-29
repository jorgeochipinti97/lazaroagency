import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { Wpp } from "../assets/icons/Wpp";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className=" lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
              <div className="flex justify-center pt-5  items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Lazaro Tech
                </div>
              </div>
        <div className="container mx-auto px-4 w-4/5 pt-10 ">
          <div className="flex flex-wrap justify-center flex-col">
            <div className="flex justify-center">
              <div className="mx-auto lg:mx-0 flex justify-center">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.instagram.com/lazaro.tech/"
                >
                  <InstagramIcon />

                </a>
              </div>
              <div className="mx-auto lg:mx-0 flex justify-center">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://wa.link/hybddx"
                >
                  <Wpp />

                </a>

              </div>
            </div>

          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            © 2023 Lazaro Tech. Todos los derechos reservados. Política de privacidad | Términos de servicio

          </p>
        </div>
      </div>
    </footer>
  );
};
