import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1">
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              Impulsa tu éxito creativo con las mejores tecnologias del mercado
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Diseño web innovador
            </h2>
            <p className="mb-16 text-customGrayText leading-loose">
              Construimos y lanzamos tus proyectos de diseño web a medida sin complicaciones, liberando todo tu potencial creativo. Eleva la productividad y alcanza resultados excepcionales. Potencia tu toma de decisiones con un enfoque avanzado en analítica y diseño, para crear páginas web únicas que reflejen tu visión.
            </p>
            <a href="#pricing">
              <div
                className="w-fit px-2 h-12 custom-button-colored mr-10  text-sm sm:mb-10 lg:mb-0"

              >

                Se la próxima historia de éxito
              </div>
            </a>
          </div>

          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last ">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
                <img
                  src={'./react.jpg'}
                  alt="f1"
                  className="rounded-xl  custom-border-gray lg:mr-10 sm:mr-0"
                />
              </div>
              <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                <img
                  src={'./pc.jpg'}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mt-2"
                />
              </div>
            </div>
          </div>

        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
