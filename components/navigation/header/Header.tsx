import Image from "next/image";
import Link from "next/link";
import JoinButton from "../../buttons/JoinButton";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header {...headerProps} className="flex justify-center pt-4 pb-6 px-6">
      <div className="max-w-[1128px] w-full flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Educa.DAO logo"
            width={138}
            height={138}
          />
        </Link>
        <JoinButton />
      </div>
    </header>
  );
};

export default Header;
