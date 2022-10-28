import Image from "next/image";
import Link from "next/link";

type SocialNetworks = {
  discord?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
};

export interface IProfile {
  name: string;
  avatar: string;
  role: string;
  socialNetworks: SocialNetworks;
}

const Profile: React.FC<IProfile> = ({
  name,
  avatar,
  role,
  socialNetworks,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={200}
          height={200}
          className="rounded-full object-cover w-[200px] h-[200px]"
        />
      </div>
      <span className="mt-6 text-white font-bold text-base sm:text-lg">
        {name}
      </span>
      <span className="text-sun text-sm sm:text-base font-semibold">
        {role}
      </span>
      <div className="flex gap-x-5 mt-3">
        {socialNetworks.linkedin && (
          <Link href={socialNetworks.linkedin} target="_blank">
            <Image
              src="/linkedin.svg"
              alt="linkedin logo"
              width={18}
              height={18}
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            />
          </Link>
        )}
        {socialNetworks.instagram && (
          <Link href={socialNetworks.instagram} target="_blank">
            <Image
              src="/instagram.svg"
              alt="instagram logo"
              width={18}
              height={18}
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            />
          </Link>
        )}
        {socialNetworks.github && (
          <Link href={socialNetworks.github} target="_blank">
            <Image src="/github.svg" alt="github logo" width={18} height={18} />
          </Link>
        )}
        {socialNetworks.discord && (
          <Link href={socialNetworks.discord} target="_blank">
            <Image
              src="/discord.svg"
              alt="discord logo"
              width={18}
              height={18}
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Profile;
