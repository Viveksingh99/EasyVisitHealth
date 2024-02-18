import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link'


const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" height={20} width={50} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((ele) => (
            <Link href={ele.path} key={ele.id}>
            <li
              className="hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out"
             
              >
              {ele.name}
            </li>
              </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
