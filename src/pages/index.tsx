import Image from 'next/image';
import Link from 'next/link';
import Profile from '@components/profile/Profile';
import { team } from '@_config/team';

import Discord from '/public/images/social-media/discord.svg';
import GitHub from '/public/images/social-media/github.svg';
import Twitter from '/public/images/social-media/twitter.svg';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center m-6">
        <div className="flex flex-col items-center w-full max-w-5xl mb-16 mx-10 xl:mx-0">
          {/* Home Big Logo */}
          <Image
            className="m-4"
            src="/images/logo-large-yellow-text.svg"
            alt="EducaDAO Logo"
            width={300}
            height={94}
          />

          {/* Description */}
          <div className="m-4">
            <p className="font-bold text-lightGray text-center text-base sm:text-xl">
              Conheça o projeto que vai transformar a educação GRATUITA.
            </p>
          </div>

          {/* Video Iframe */}
          <div className="relative w-[106.75vh] max-w-[95vw] min-h-[53.5vw] md:min-h-[60vh] sm:max-h-[20vw]">
            <iframe
              className="absolute top-0 left-0 w-full h-full overflow-hidden"
              src="https://www.youtube.com/embed/Hn6-JoCGZRc?autoplay=1&mute=1"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex gap-x-8 m-12">
            <Link
              href="https://github.com/Educa-DAO"
              target="_blank"
              title="Ir para o GitHub"
            >
              <GitHub
                color="#FCBD10"
                alt="github logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>

            <Link
              href="https://twitter.com/EducaDAOBR"
              target="_blank"
              title="Ir para o Twitter"
            >
              <Twitter
                color="#FCBD10"
                alt="twitter logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>

            <Link
              href="https://discord.gg/PaB2qJ5a6j"
              target="_blank"
              title="Ir para o Discord"
            >
              <Discord
                color="#FCBD10"
                alt="discord logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>
          </div>

          {/* Description */}
          <div className="m-4">
            <p className="font-bold text-lightGray text-center text-base sm:text-xl">
              Impulsionadora de conteúdos educacionais, com acesso gratuito e
              inclusivo para que estudantes se conectem a produtores de
              conteúdos, tanto consumindo os cursos, quanto sugerindo novos
              temas.
            </p>
          </div>
        </div>
      </section>

      {/* Hackathon Winner */}
      <section>
        <div className="flex justify-center items-center bg-sun h-32 sm:h-36 px-10 lg:px-0">
          <h2 className="text-2xl sm:text-4xl text-center leading-10 tracking-normal font-semibold text-daisyBush">
            Ganhadores do Hackathon Ethereum SP 2022
          </h2>
        </div>
        <div className="flex justify-center bg-lightGray py-8 sm:py-12 px-10 lg:px-0">
          <div className="flex flex-col items-center lg:w-[896px] xl:w-[1024px]">
            <div className="flex flex-col lg:flex-row gap-y-8 sm:gap-y-14 justify-between items-center mb-10 sm:mb-16 w-full">
              <Image
                src="/images/partners/ethereumBR.png"
                alt="Ethereum Brasil logo"
                width={448}
                height={201}
              />

              <Image
                src="/images/partners/ethereumSP.png"
                alt="Ethereum Brasil logo"
                width={448}
                height={201}
              />
            </div>

            <h3 className="text-2xl text-center leading-10 tracking-normal font-semibold">
              Premiações extras
            </h3>

            <div className="flex flex-col lg:flex-row gap-y-8 sm:gap-y-14 justify-between items-center w-full mt-8 sm:mt-12">
              <Image
                src="/images/partners/cryptum.png"
                alt="Cryptum logo"
                width={285}
                height={201}
              />

              <Image
                src="/images/partners/filecoin.png"
                alt="Filecoin logo"
                width={285}
                height={201}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="flex flex-col items-center mt-12 mb-16 sm:mb-20">
        <div className="flex flex-col flex-wrap items-center lg:max-w-[1024px] mx-2 sm:mx-0">
          <h2 className="text-2xl sm:text-4xl text-sun leading-10 tracking-normal font-semibold">
            Equipe
          </h2>

          <div className="flex justify-center gap-x-8 lg:gap-x-10 xl:gap-x-16 gap-y-10 xl:gap-y-12 w-full flex-wrap mt-12 sm:mt-16">
            {team.map((member) => (
              <Profile data={member} key={member.name} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
