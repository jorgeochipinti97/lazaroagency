
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Pricing = () => {



  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Encuentra tu plan ideal
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Elige tu plan
              </h2>
              <p className="mb-6 text-customGrayText">
                Elige el plan que se ajuste a tus necesidades y aprovecha al máximo nuestras herramientas

              </p>
              {/* <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Monthly
                  </div>
                  <div className={isMonthly && "text-gray-400"}>Yearly</div>
                </div>
              </label> */}
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Básico
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $350
                    </div>
                    <div className="text-gray-500">
                      / month
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Ideal para influencers que buscan dar vida a su contenido en cortos y reels.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">

                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>30 shorts/reels (30 a 60 seg)</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Un video horizontal </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>5 Miniaturas</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Asesoramiento (mentoring de redes sociales)</span>
                    </li>

                  </ul>
                  <a href="https://buy.stripe.com/cN2dSk5c61QveuQdQS">
                    <div
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"

                    >

                      Comienza ahora
                    </div>
                  </a>
                  <p className="text-center text-white mt-2 font-thin">Compra protegida via Stripe</p>

                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    Estándar
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $650
                    </div>
                    <div className="text-gray-500">
                      / month
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Perfecto para aquellos que desean llevar su presencia en redes sociales al siguiente nivel.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">

                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>60 shorts/reels (30 a 60 seg)</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>3 videos horizontales</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>10 Miniaturas</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Asesoramiento (mentoring + meets con asesor)</span>
                    </li>

                  </ul>
                  <a href="https://buy.stripe.com/aEU4hK0VQ7aP5YkaEH">


                    <div
                      className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"

                    >
                      Comienza ahora
                    </div>
                  </a>
                  <p className="text-center text-white mt-2 font-thin">Compra protegida via Stripe</p>

                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Premium
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $900
                    </div>
                    <div className="text-gray-500">
                      / month
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Diseñado para quienes buscan una gestión integral de redes sociales y una presencia impactante en línea.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">

                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>90 shorts/reels (30 a 60 seg)</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>6 videos horizontales</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>20 Miniaturas</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Asesoramiento personalizado (servicio de Community Manager)</span>
                    </li>

                  </ul>
                  <a href="https://buy.stripe.com/8wMcOgdIC3YD1I44gk">

                    <div
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"

                    >
                      Comienza ahora
                    </div>
                  </a>
                  <p className="text-center text-white mt-2 font-thin">Compra protegida via Stripe</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
