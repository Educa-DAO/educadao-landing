import Head from "next/head";
import Footer from "../navigation/footer/Footer";
import Header from "../navigation/header/Header";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = "items-center",
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Educa.DAO</title>
      </Head>
      <div
        {...divProps}
        className={`min-h-screen flex flex-col bg-daisyBush ${justify}`}
      >
        <div className="w-full">
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default PrimaryLayout;
