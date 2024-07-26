"use client";

import { FC, useState, useEffect } from "react";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Cosmosnav from "@/public/images/Cosmosnav.png";
import Logonav from "@/public/images/Logonav.png";
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
    <nav className="bg-background relative z-50 w-full px-4 py-2 shadow-md lg:px-20">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link href="/">
          <div className="flex items-center">
            <Image
              className="mr-2 w-8 md:mr-4 md:w-10"
              src={Logonav}
              alt="Logonav"
              width={45}
              height={48}
            />
            <Image
              className="w-20 md:w-28"
              src={Cosmosnav}
              alt="Cosmosnav"
              width={128}
              height={22}
            />
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
              <X className="text-foreground h-6 w-6" />
            ) : (
              <Menu className="text-foreground h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMobileScreen && mobileMenuOpen && (
        <div className="bg-primary-background absolute left-0 top-full h-screen w-3/4 shadow-md">
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
                    pathName === link.href
                      ? "text-primary-foreground"
                      : "text-primary-accent"
                  )}
                  href={link.href}
                >
                  {pathName === link.href && (
                    <div className="flex items-center justify-start">
                      <div className="h-6 w-6 flex-shrink-0">
                        <Image
                          src={Logowhite}
                          alt="Logo"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  )}
                  <span
                    className={`ml-0 ${
                      pathName === link.href ? "ml-4" : "ml-10"
                    }`}
                  >
                    {link.text}
                  </span>
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
