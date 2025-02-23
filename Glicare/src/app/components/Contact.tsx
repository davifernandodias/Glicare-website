import Button from "./ui/buttomContact";
import IconEmail from "../../../public/svg/icon-email";
import IconPhone from "../../../public/svg/icon-phone";
import IconWhatsApp from "../../../public/svg/icon-whatsapp";

export default function Contact() {
  return (
    <section className="min-h-screen w-full flex-shrink-0 bg-primary-gray lg:pl-6">
      <div className="text-left py-12 px-6">
        <h2 className="text-2xl lg:text-[28px] font-medium text-dark leading-[34px] font-inter w-full pr-14">
          Entre em contato com o Glicare
        </h2>
        <p className="text-gray mt-2 font-inter pr-16 text-lg lg:text-xl font-normal leading-[24px] text-left w-full sm:w-[700px]">
          Caso ainda tenha dúvidas ou esteja com problema para utilizar o
          Glicare, você pode entrar em contato conosco abaixo:
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-[64px] ml-[125px]">
          <div className="w-[336px] h-[310px] flex-shrink-0 bg-background rounded-2xl p-6 text-center hidden md:block">
            <IconPhone className="bg-white mx-auto mt-[34px]" />
            <h3 className="font-semibold text-lg mt-6 text-dark">
              Nos contate diretamente
            </h3>
            <a href="tel:+5512345678901" className="text-blue text-center font-inter text-xl font-semibold leading-normal w-[214px] h-[22px] ml-6">
          +55 12 34567-8901
        </a>
          </div>

          <div className="w-[336px] h-[310px] flex-shrink-0 bg-background rounded-2xl p-6 text-center hidden md:block">
            <IconWhatsApp className="bg-white mx-auto mt-[34px]" />
            <h3 className="font-semibold text-lg mt-6 text-dark">
              Nos chame no WhatsApp
            </h3>
            <a
              href="https://wa.me/5512345678901"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Chamar no WhatsApp</Button>
            </a>
          </div>

          <div className="w-[336px] h-[310px] flex-shrink-0 bg-background rounded-2xl p-6 text-center hidden md:block">
            <IconEmail className="bg-white mx-auto mt-[34px]" />
            <h3 className="font-semibold text-lg mt-6 text-dark">
              Entre em contato pelo e-mail
            </h3>
            <a href="mailto:contato@glicare.com" className="text-blue font-inter text-xl font-semibold leading-normal">
          contato@glicare.com
        </a>
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-16 mr-4">
          <div className="text-center">
            <IconPhone className="bg-white ml-9 w-[36px] h-[36px]" />
          </div>
          <div className=" bg-white text-center">
            <IconWhatsApp />
          </div>
          <div className="bg-white text-center">
            <IconEmail />
          </div>
        </div>
      </div>
    </section>
  );
}
