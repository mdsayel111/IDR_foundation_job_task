import React, { ReactNode } from "react";

const NavLInk = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export default NavLInk;
