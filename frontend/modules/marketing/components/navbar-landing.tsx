"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Cosmosnav from "@/public/images/Cosmosnav.png";
import Logonav from "@/public/images/Logonav.png";

const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

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
    <nav className="relative z-50 w-full bg-white shadow-md md:px-10 lg:px-20">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link href="/">
          <div className="flex items-center">
            <Image
              className="mr-4"
              src={Logonav}
              alt="Logonav"
              width={45}
              height={48}
            />
            <Image src={Cosmosnav} alt="Cosmosnav" width={128} height={22} />
          </div>
        </Link>

        <div className="hidden flex-grow justify-center space-x-4 md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link
                className="text-muted-foreground hover:text-primary lg:mx-6"
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
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMobileScreen && mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-2 py-2">
            <li>
              <Link
                className="text-muted-foreground  hover:text-primary block text-xs"
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary block text-xs"
                href="/socios"
              >
                Socios
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground  hover:text-primary block text-xs"
                href="/planes"
              >
                Planes
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary block text-xs"
                href="/ayuda"
              >
                Ayuda
              </Link>
            </li>
            <li>
              <Link
                className="bg-background text-primary  block text-xs md:px-6 md:py-1 md:text-base"
                href="/login"
              >
                Ingresar
              </Link>
            </li>
            <li>
              <Link
                className="text-destructive-foreground block  text-xs md:px-6 md:py-1 md:text-base"
                href="/register"
              >
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
