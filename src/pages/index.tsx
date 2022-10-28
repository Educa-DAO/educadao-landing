import Image from 'next/image';
import Link from 'next/link';
import Profile from '@components/profile/Profile';
import { team } from '@_config/team';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center pt-12 sm:pt-20">
        <div className="flex flex-col items-center max-w-5xl mb-16 mx-10 xl:mx-0">
          <Image
            className="mb-5 sm:mb-8"
            src="/images/logo-large-yellow-text.svg"
            alt="EducaDAO Logo"
            width={400}
            height={126}
          />

          <div className="mb-6">
            <p className="font-bold text-blackHaze text-center text-base sm:text-xl">
              Impulsionadora de conteúdos educacionais, com acesso democrático e
              inclusivo para que estudantes se conectem a produtores de
              conteúdos, tanto consumindo os cursos, quanto sugerindo novos
              temas.
            </p>
          </div>

          <div className="flex gap-x-8">
            <Link href="https://twitter.com/EducaDAOBR" target={'_blank'}>
              <Image
                src="/images/social-media/twitter.svg"
                alt="twitter logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>

            <Link href="https://discord.gg/VFqEnrdvgB" target={'_blank'}>
              <Image
                src="/images/social-media/discord.svg"
                alt="discord logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>
          </div>

          <div className="relative w-full h-0 pb-[56.25%] mt-8 sm:mt-12">
            <iframe
              className="absolute top-0 left-0 w-full h-full md:min-h-[400px] overflow-hidden"
              src="https://www.youtube.com/embed/Yfag6BvTjEg?autoplay=1&mute=1"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay"
            />
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
        <div className="flex justify-center bg-blackHaze py-8 sm:py-12 px-10 lg:px-0">
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
              Ganhadores do desafio utilizando as tecnologias
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

      <section className="flex flex-col items-center mt-12 mb-16 sm:mb-20">
        <div className="flex flex-col flex-wrap items-center lg:w-[1024px] mx-2 sm:mx-0">
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
