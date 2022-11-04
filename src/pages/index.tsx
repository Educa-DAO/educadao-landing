import Image from 'next/image';
import Profile from '@components/profile/Profile';
import { team } from '@_config/team';
import Logo from '@components/logo/Logo';
import SocialMediaLinks from '@components/social-media-links/SocialMediaLinks';
import Button from '@components/button/Button';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center m-6">
        <div className="flex flex-col items-center w-full mx-10 xl:mx-0">
          {/* Home Big Logo */}
          <Logo
            theme="wide-for-purple-bg-yellow-text"
            width={300}
            height={94}
          />

          {/* Description */}
          <div className="m-6 flex flex-col items-center">
            <p className="font-bold text-lightGray text-center text-base sm:text-xl mb-3">
              Conheça o projeto que vai transformar a educação GRATUITA.
            </p>
            <Button
              link="https://forms.gle/jD5E8sx6nkbYSuDf7"
              className="flex mr-4"
              title="Ir para a o formulário"
            >
              <span className="px-8 py-[2px]">Quero contribuir</span>
            </Button>
          </div>

          {/* Video Iframe */}
          <div className="relative w-[106.75vh] max-w-[95vw] min-h-[53.5vw] md:min-h-[60vh] sm:max-h-[20vw]">
            <iframe
              className="absolute top-0 left-0 w-full h-full overflow-hidden"
              src="https://www.youtube.com/embed/Hn6-JoCGZRc"
              frameBorder="0"
              allowFullScreen={true}
            />
          </div>

          {/* Social Media Links */}
          <SocialMediaLinks className="text-sun m-12" />

          {/* Description */}
          <div className="mb-6 max-w-4xl">
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
                src="/images/partners/ethereum-br.png"
                alt="Ethereum Brasil logo"
                width={448}
                height={201}
              />

              <Image
                src="/images/partners/ethereum-sp.png"
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
                src="/images/partners/file-coin.png"
                alt="File Coin logo"
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
