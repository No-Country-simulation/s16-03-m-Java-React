"use client";

import { FC, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Cosmosnav from "@/public/images/Cosmosnav.png";
import Logonav from "@/public/images/Logonav.png";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logowhite from "@/public/images/Logowhite.png";


const Navbar: FC = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
const pathName = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobileScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsMobileScreen(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="relative z-50 w-full bg-secondary shadow-md px-4 py-2 lg:px-20">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link href="/">
          <div className="flex items-center">
            <Image
              className="mr-2 md:mr-4 w-8 md:w-10"
              src={Logonav}
              alt="Logonav"
              width={45}
              height={48}
            />
            <Image className="w-20 md:w-28" src={Cosmosnav} alt="Cosmosnav" width={128} height={22} />
          </div>
        </Link>

        <div className="hidden flex-grow justify-center space-x-4 md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link
                className="text-muted-foreground hover:text-primary lg:mx-6 "
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary lg:mx-6"
                href="/socios"
              >
                Socios
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary lg:mx-6"
                href="/planes"
              >
                Planes
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary lg:mx-6"
                href="/ayuda"
              >
                Ayuda
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden items-center space-x-4 md:flex">
          <Link
            className="bg-background text-primary border-primary rounded-full border-2 px-4 py-1 text-xs md:px-6 md:py-1 md:text-base"
            href="/login"
          >
            Ingresar
          </Link>
          <Link
            className="bg-primary text-background border-primary rounded-full border-2 px-4 py-1 text-xs md:px-6 md:py-1 md:text-base"
            href="/register"
          >
            Registrarse
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="outline-none focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

  {isMobileScreen && mobileMenuOpen && (
  <div className="absolute left-0 top-full w-3/4 bg-primary-background shadow-md h-screen">
    <ul
      className={cn(
        "flex flex-col space-y-2 px-6 py-8",
        mobileMenuOpen ? "block" : "hidden",
        "md:flex md:flex-col md:items-start md:space-y-6 md:p-10"
      )}
    >
      {[
        { href: "/", text: "Inicio" },
        { href: "/socios", text: "Socios" },
        { href: "/planes", text: "Planes" },
        { href: "/ayuda", text: "Ayuda" },
        { href: "/login", text: "Ingresar" },
        { href: "/register", text: "Registrarse" },
      ].map((link, index) => (
        <li key={index} className="relative">
          <Link
            className={cn(
              buttonVariants({ size: "lg", variant: "sidebar_button" }),
              "flex items-center justify-start hover:no-underline",
              pathName === link.href ? "text-primary-foreground" : "text-primary-accent",
            )}
            href={link.href}
          >
            {pathName === link.href && (
              <div className="flex items-center justify-start">
                <div className="w-6 h-6 flex-shrink-0">
                <Image
                  src={Logowhite}
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </div>
              </div>
            )}
            <span className={`ml-0 ${pathName === link.href ? "ml-4" : "ml-10"}`}>{link.text}</span>
          </Link>
        </li>
      ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
