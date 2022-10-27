import Link from "next/link";

export interface IJoinButton extends React.ComponentPropsWithoutRef<"button"> {}

const JoinButton: React.FC<IJoinButton> = ({ className, ...buttonProps }) => {
  return (
    <Link href="https://discord.gg/VFqEnrdvgB" target={"_blank"}>
      <button
        className="bg-sun px-6 py-2 text-daisyBush font-semibold rounded-sm"
        {...buttonProps}
      >
        Join Our Community
      </button>
    </Link>
  );
};

export default JoinButton;
