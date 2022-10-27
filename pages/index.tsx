import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../components/layouts/Layout";
import type { NextPageWithLayout } from "./_app";
import ReactPlayer from "react-player/youtube";
import Profile from "../components/profile/Profile";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section className="flex flex-col items-center pt-20">
        <div className="flex flex-col items-center max-w-5xl mb-16">
          <h1 className="mb-8 text-6xl leading-10 tracking-normal font-semibold text-blackHaze">
            Landing template for <span className="text-sun">startups</span>
          </h1>
          <div className="mb-6 max-w-[620px]">
            <p className="font-bold text-gullGray text-center text-xl">
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
          </div>
          <div className="flex gap-x-8">
            <Link href="https://twitter.com/EducaDAOBR" target={"_blank"}>
              <Image
                src="/twitter.svg"
                alt="twitter logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://discord.gg/VFqEnrdvgB" target={"_blank"}>
              <Image
                src="/discord.svg"
                alt="discord logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="mt-12">
            <ReactPlayer
              style={{ borderRadius: "2px!important" }}
              url="https://www.youtube.com/watch?v=pVE92TNDwUk"
              width={896}
              height={504}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center bg-sun h-36">
          <h2 className="text-4xl leading-10 tracking-normal font-semibold text-daisyBush">
            Ganhadores do Hackathon Ethereum SP 2022
          </h2>
        </div>
        <div className="flex justify-center bg-blackHaze pt-12 pb-12">
          <div className="flex flex-col items-center w-[1024px]">
            <div className="flex justify-between items-center mb-16 w-full">
              <Image
                src="/ethereumBR.png"
                alt="Ethereum Brasil logo"
                width={448}
                height={201}
              />
              <Image
                src="/ethereumSP.png"
                alt="Ethereum Brasil logo"
                width={448}
                height={201}
              />
            </div>
            <h3 className="text-2xl leading-10 tracking-normal font-semibold">
              Ganhadores do desafio utilizando as tecnologias
            </h3>
            <div className="flex justify-between items-center w-full mt-12">
              <Image
                src="/cryptum.png"
                alt="Cryptum logo"
                width={285}
                height={201}
              />
              <Image
                src="/filecoin.png"
                alt="Filecoin logo"
                width={285}
                height={201}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-12 mb-20">
        <div className="flex flex-col flex-wrap items-center w-[1024px]">
          <h2 className="text-4xl text-sun leading-10 tracking-normal font-semibold">
            Fundadores
          </h2>
          <div className="flex justify-center gap-x-8 gap-y-8 w-full flex-wrap mt-16">
            <Profile
              name="Paulo Salvatore"
              avatar="/paulo.jpg"
              role={"Evangelista"}
              socialNetworks={{
                linkedin: "https://www.linkedin.com/in/salvatorepaulo/",
                github: "https://github.com/paulosalvatore",
              }}
            />
            <Profile
              name="Kmilo Aparicio"
              avatar="/kmilo.jpg"
              role={"Estratégia e Negócios"}
              socialNetworks={{
                linkedin: "https://www.linkedin.com/in/kmiloandres/",
                discord: "https://github.com/paulosalvatore",
              }}
            />
            <Profile
              name="Ailton Sávio"
              avatar="/ailton.jpg"
              role={"Head de Tecnologia"}
              socialNetworks={{
                linkedin:
                  "https://www.linkedin.com/in/ailton-s%C3%A1vio-2b342715b/",
                github: "https://github.com/AiltonSavio",
              }}
            />
            <Profile
              name="Bruno"
              avatar="/avatar.png"
              role={"Qualidade"}
              socialNetworks={{
                linkedin: "https://www.linkedin.com/in/bbardella/",
              }}
            />
            <Profile
              name="Vinícius Oligon"
              avatar="/vinicius.png"
              role={"Head de Produtos"}
              socialNetworks={{
                linkedin: "https://www.linkedin.com/in/violigon/",
                github: "https://github.com/violigon",
              }}
            />
            <Profile
              name="Gabriel Gois"
              avatar="/avatar.png"
              role={"Gestor de Comunidade"}
              socialNetworks={{}}
            />
            {/* <Profile
              name="Rivan Bello"
              avatar="/avatar.png"
              role={""}
              socialNetworks={{}}
            /> */}
            <Profile
              name="Tainá Huertas"
              avatar="/avatar.png"
              role={"Head de Inovação"}
              socialNetworks={{}}
            />
          </div>
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
