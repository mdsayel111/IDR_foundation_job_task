import Image from "next/image";
import React from "react";

const NavWithLogo = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Image src={src} alt="logo" height={50} width={50} />
    </div>
  );
};

export default NavWithLogo;
