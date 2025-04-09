import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        src="/TBH_Logo.jpg"
        alt="Logo"
        width={50}
        height={50}
        className={cn("rounded-sm", className)}
      />
    </Link>
  );
};

export default Logo;
