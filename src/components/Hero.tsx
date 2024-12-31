import Image from "next/image";
import { Container } from "@/components/Container";
import tma2 from "../../public/img/TMALogo2.jpg";
import bet365 from "../../public/img/Bet365Logo.png";
import betano from "../../public/img/BetanoLogo.png";
import betsson from "../../public/img/BetssonLogo.png";
import inkabet from "../../public/img/InkabetLogo.png";
import teapuesto from "../../public/img/TeApuestoLogo.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Tu Mejor Apuesta Perú
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              ¡Bienvenidos a "Tu Mejor Apuesta Perú"! 🌟 Un equipo consolidado desde el 2014, especializado en ofrecer el análisis más certero de fútbol y torneos internacionales, incluyendo partidos de la NBA. 🏀.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://t.me/+iFNSuknzyEQ0OTdh"
                target="_blank"
                rel="noopener"
                className="px-8 mt-2 py-4 text-md lg:text-lg font-medium text-center text-white bg-indigo-600 rounded-md w-full md:w-auto">
                Únete a nuestro canal de Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={tma2}
              width="616"
              height="617"
              className={"object-cover rounded-3xl"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-lg xl:text-xl text-center text-gray-700 dark:text-white">
            Con la confianza de <span className="text-indigo-600">+20000</span>{" "}
            clientes en todo el mundo y con jugadas para todas las casas de apuesta
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 sm:flex-col md:flex-row md:justify-around items-center">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Bet365Logo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <BetanoLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <BetssonLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <InkabetLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <TeApuestoLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Bet365Logo() {
  return (
    <Image src={bet365}
      width="110"
      height="33"
      alt="" />
  );
}

function BetanoLogo() {
  return (
    <Image src={betano}
      width="110"
      height="33"
      alt="" />
  );
}

function BetssonLogo() {
  return (
    <Image src={betsson}
      width="110"
      height="33"
      alt="" />
  );
}

function InkabetLogo() {
  return (
    <Image src={inkabet}
      width="110"
      height="33"
      alt="" />
  );
}

function TeApuestoLogo() {
  return (
    <Image src={teapuesto}
      width="110"
      height="33"
      alt="" />
  );
}