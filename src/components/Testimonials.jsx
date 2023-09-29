import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Alejandro",
    customerTitle: "Emprendedor en México",
    content:
      "Estoy emocionado por el impacto que ha tenido mi sitio web diseñado por Lazaro Tech. Desde que lanzamos la nueva página, mi negocio ha experimentado un aumento significativo en la visibilidad en línea. El diseño a medida realmente capturó la esencia de mi marca y conectó con mi audiencia. ¡Gracias a Lazaro Tech por hacer que mi visión cobre vida en la web!",
    image: testimonial1,
  },
  {
    customerName: "Ana",
    customerTitle: "Empresaria en Argentina",
    content:
      "Después de colaborar con Lazaro Tech en el diseño y desarrollo de nuestro sitio web, nuestra presencia en línea se ha fortalecido de manera significativa. La programación personalizada y el diseño creativo de Lazaro Tech han hecho que nuestra empresa se destaque en un mercado competitivo. Estoy agradecida por su enfoque profesional y la atención al detalle que han aportado a nuestro proyecto.",
    image: testimonial2,
  },
  {
    customerName: "Carlos",
    customerTitle: "Blogger en Colombia",
    content:
      "La experiencia de trabajar con Lazaro Tech en el diseño de mi blog ha sido excepcional. No solo crearon un sitio web atractivo visualmente, sino que también se aseguraron de que fuera altamente funcional y receptivo. El equipo de Lazaro Tech tuvo en cuenta cada detalle, y mis visitantes han comentado positivamente sobre la experiencia de usuario mejorada.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonios
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
Los clientes hablan.
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
