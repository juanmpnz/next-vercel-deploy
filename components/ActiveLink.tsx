import React, { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface props {
  text: string;
  href: string;
}

export const ActiveLink = ({ text, href }: props) => {
  const { asPath } = useRouter();
  const style: CSSProperties = {
    color: "#007633",
    textDecoration: "underline",
  };
  return (
    <Link href={href}>
      <p style={asPath === href ? style : {}}>{text}</p>
    </Link>
  );
};
