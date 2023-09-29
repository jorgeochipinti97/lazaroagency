import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "¿Qué es un Shorts o Reel?",
    answer:
      "Un Shorts o Reel es un formato de video corto muy popular en plataformas como Instagram, TikTok y YouTube. Suelen durar de 30 a 60 segundos y son ideales para captar la atención de la audiencia en poco tiempo.",
  },
  {
    question: "¿Qué diferencia hay entre los packs de suscripción?",
    answer:
      "Cada pack de suscripción varía en términos de la cantidad de Shorts/Reels, videos horizontales, miniaturas y servicios de asesoramiento incluidos. El Pack 1 es perfecto para quienes comienzan, el Pack 2 ofrece una experiencia más completa y el Pack 3 brinda una gestión integral de redes sociales.",
  },
  {
    question: "¿Cómo puedo empezar con Lazaro Tech?",
    answer:
      "Es sencillo. Elige uno de nuestros packs de suscripción, completa el proceso de pago y nos pondremos en contacto contigo para conocer tus necesidades y empezar a trabajar en tus proyectos.",
  },
  {
    question: "¿Cuánto tiempo se tarda en completar los proyectos?    ",
    answer:
      "El tiempo de entrega varía según el pack que elijas y la complejidad del proyecto. Normalmente, los proyectos se completan en unas pocas semanas. Trabajamos de manera eficiente para asegurarnos de que obtengas resultados de calidad en un plazo razonable.",
  },
  {
    question: "¿Cómo funcionan las reuniones con el asesor?    ",
    answer:
      "En el Pack 2, ofrecemos reuniones con un asesor experto en redes sociales para discutir estrategias y mejoras. Estas reuniones se realizan de manera virtual a través de plataformas de videollamadas y son personalizadas para tu proyecto y objetivos.",
  },
  {
    question: "¿Puedo cancelar mi plan de suscripción en cualquier momento?    ",
    answer:
      "Sí, puedes cancelar tu plan de suscripción en cualquier momento. Estamos comprometidos a brindar flexibilidad a nuestros clientes. Si decides cancelar, simplemente ponte en contacto con nuestro equipo y te guiaremos a través del proceso de cancelación sin complicaciones. Ten en cuenta que algunos términos y condiciones pueden aplicar según el plan seleccionado.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
          ¿Tienes alguna consulta? 
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
Preguntas frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
