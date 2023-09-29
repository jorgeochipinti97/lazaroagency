import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ color: '#776391' }} className=" text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            La transformación comienza ahora

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl  font-bold tracking-wide  text-white  ">
            Tu socio hacia la cima digital
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            En Lazaro Tech, no nos conformamos con menos. Somos la chispa que enciende el camino hacia el éxito en línea.<br/> Con pasión desbordante y un enfoque profesional de primera, ofrecemos servicios de marketing digital diseñados para llevar a tu negocio a la cima.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
              style={{ border: '2px solid #776391', color: '#f5f5f7', }}
              className="rounded-xl cursor-pointer w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 flex justify-center items-center"
              onClick={() => setIsModalOpen(true)}
            >
Comienza ahora
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center w-full ">
            <div className="lg:w-3/5 sm:w-screen mx-2 " style={{ border: '1px solid rgba(0,0,0,0.5)', WebkitBoxShadow: ' 5px 8px 65px 11px rgba(119,99,145,1)', MozBoxShadow: '5px 8px 65px 11px rgba(119,99,145,1)', boxShadow: '5px 8px 65px 11px rgba(119,99,145,1)', borderRadius: '50px' }}>
              <video src="/espanol.webm" className="" playsInline controls muted loop autoPlay style={{ borderRadius: '50px' }} />
            </div>
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="custom-shape-divider-bottom-1665343298   hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
      <style>

      </style>
    </section>


  );
};
