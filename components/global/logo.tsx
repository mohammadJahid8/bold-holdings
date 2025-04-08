import Image from "next/image";
import { cn } from "@/lib/utils";
const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/TBH_Logo.jpg"
      alt="Logo"
      width={50}
      height={50}
      className={cn("rounded-sm", className)}
    />
  );
};

export default Logo;
