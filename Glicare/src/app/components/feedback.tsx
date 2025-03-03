"use client";
import IconToCardFeedback from "@/public/svg/icon-to-card-feedback";
import IUsersFeedback from "../models/feedback.interface";
import Slider from "react-slick";
const usersFeedback: IUsersFeedback[] = [
  {
    id: 1,
    feedback:
      "Desde que comecei a usar o Glicare, ficou muito mais fácil acompanhar minha diabetes.",
    user: "Rosângela Amaral",
  },
  {
    id: 2,
    feedback:
      "Meus pacientes adoram. Meu trabalho é mais fácil e posso ver a evolução de cada um.",
    user: "Dr. Mauro Cordeiro",
  },
  {
    id: 3,
    feedback:
      "Ficou muito mais simples de acompanhar a condição da minha mãe.",
    user: "Ana Carolina Medeiros",
  },
];
export default function Feedback() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <div className="flex flex-col gap-8 px-6 py-16 md:py-36 md:px-20 md:gap-16">
        <div className="flex flex-col gap-6 px-2">
          <h1 className="text-gray-dark font-medium text-2xl md:text-28">
            O que estão dizendo do Glicare?
          </h1>
          <p className="md:w-624 md:text-xl text-secondary-gray">
            Muitos usuários já estão usando o Glicare para simplificarem a
            rotina e o controle das diabetes.
          </p>
        </div>
        <div className="hidden md:flex justify-center gap-4">
          {usersFeedback.map((feedback) => (
            <div
              key={feedback.id}
              className="flex flex-col w-336 h-80 justify-center items-center text-center gap-6 p-6 rounded-2xl bg-white font-inter"
            >
              <IconToCardFeedback />
              <p className="font-normal text-gray-dark text-base px-4 md:px-8">
                {feedback.feedback}
              </p>
              <div className="bg-blue-400 w-16 h-16 rounded-full"></div>
              <p className="font-normal text-base text-secondary-gray">
                {feedback.user}
              </p>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Slider {...settings}>
            {usersFeedback.map((feedback) => (
              <div key={feedback.id} className="px-2">
                <div className="flex flex-col w-full h-80 justify-center items-center text-center gap-4 p-6 rounded-2xl bg-white font-inter">
                  <IconToCardFeedback />
                  <p className="font-normal text-gray-dark text-base px-6">
                    {feedback.feedback}
                  </p>
                  <div className="bg-blue-400 w-16 h-16 rounded-full"></div>
                  <p className="font-normal text-base text-secondary-gray">
                    {feedback.user}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}