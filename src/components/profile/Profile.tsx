import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProfileProps } from "./Profile.types";

function Profile({ name, avatar, role, socialNetworks }: ProfileProps) {
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
        {Object.entries(socialNetworks).map(([key, value]) => (
          <Link href={value} key={key} target="_blank">
            <Image
              src={`/social-media/${key}.svg`}
              alt={`${key} logo`}
              width={18}
              height={18}
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Profile;
