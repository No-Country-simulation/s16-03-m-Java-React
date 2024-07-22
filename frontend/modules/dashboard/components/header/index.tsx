"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Cosmosnav from "@/public/images/Cosmosnav.png";
import Logonav from "@/public/images/Logonav.png";
import ButtonUser from "@/modules/dashboard/components/header/components/button-user";
import sidebarLinks, { SidebarLinkType } from "@/modules/dashboard/components/sidebar/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logowhite from "@/public/images/Logowhite.png";

const Header: FC = () => {
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
        <Link href="/dashboard">
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

        <div className="hidden md:flex flex-grow items-center justify-end md: space-x-4">
          <div className="flex items-center">
            <ButtonUser />
            <p className="w-40 ml-4">Username</p>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={toggleMobileMenu} className="outline-none focus:outline-none">
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {isMobileScreen && mobileMenuOpen && (
        <div className="overflow-y-auto absolute left-0 top-full w-3/4 bg-primary-background shadow-md h-screen">
          <div className="flex flex-col py-4 px-6">
            <nav className="flex flex-col gap-2">
              {sidebarLinks?.length > 0 ? (
                sidebarLinks.map((item: SidebarLinkType, index: number) =>
                  item.children ? (
                    <Accordion key={index} type="single" collapsible>
                      <AccordionItem value={item.title} className="border-b-0">
                        <AccordionTrigger
                          className={cn(
                            buttonVariants({
                              size: "lg",
                              variant: "sidebar_button",
                            }),
                            `justify-between hover:no-underline ${
                              pathName === item.url ? "text-primary-foreground" : ""
                            }`
                          )}
                        >
                          <div className="flex items-center justify-start">
                            <div className="w-6 h-6 mr-2 flex-shrink-0">
                              {pathName === item.url && (
                                <Image
                                  src={Logowhite}
                                  width={24}
                                  height={24}
                                  alt="Logo Cosmos"
                                />
                              )}
                            </div>
                            <span>{item.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="ml-7 flex flex-col space-y-1">
                            {item.children.map((child, index) => (
                              <Link
                                key={index}
                                href={child.url || "/"}
                                className={cn(
                                  buttonVariants({
                                    size: "lg",
                                    variant: "sidebar_button",
                                  }),
                                  `justify-start ${
                                    pathName === child.url
                                      ? "text-primary-foreground"
                                      : ""
                                  }`
                                )}
                              >
                                <div className="flex items-center justify-start">
                                  <div className="w-6 h-6 mr-2 flex-shrink-0">
                                    {pathName === child.url && (
                                      <Image
                                        src={Logowhite}
                                        width={24}
                                        height={24}
                                        alt="Logo Cosmos"
                                      />
                                    )}
                                  </div>
                                  <span>{child.title}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    item.url && (
                      <Link
                        key={index}
                        href={item.url}
                        className={cn(
                          buttonVariants({
                            size: "lg",
                            variant: "sidebar_button",
                          }),
                          `justify-start ${
                            pathName === item.url ? "text-primary-foreground" : ""
                          }`
                        )}
                      >
                        <div className="flex items-center justify-start">
                          <div className="w-6 h-6 mr-2 flex-shrink-0">
                            {pathName === item.url && (
                              <Image
                                src={Logowhite}
                                width={24}
                                height={24}
                                alt="Logo Cosmos"
                              />
                            )}
                          </div>
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    )
                  )
                )
              ) : null}
            </nav>
          </div>
        </div>
      )}

      {isMobileScreen && !mobileMenuOpen && (
        <div className="fixed bottom-0 left-0 w-full bg-secondary shadow-md py-4 flex justify-center">
          <ButtonUser />
        </div>
      )}
    </nav>
  );
};

export default Header;
