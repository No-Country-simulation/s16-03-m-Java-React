"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import sidebarLinks, { SidebarLinkType } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logowhite from "@/public/images/Logowhite.png";

const Sidebar = () => {
  const pathName: string = usePathname();

  const shouldShowSidebar = pathName !== "/dashboard/templates/editor";

  if (!shouldShowSidebar) return null;

  return (
    <aside className="bg-primary-background sticky top-0 h-screen px-6 py-10 hidden md:block">
      <div className="grid gap-4">
        {sidebarLinks?.length > 0 ? (
          <nav className="flex flex-col gap-2">
            {sidebarLinks?.map((item: SidebarLinkType, index: number) =>
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
                        <div className="flex-shrink-0 w-6 h-6 mr-2">
                          {pathName === item.url && (
                            <Image
                              src={Logowhite}
                              width={24}
                              height={24}
                              alt="Logo Cosmos"
                            />
                          )}
                        </div>
                        {item.title}
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
                              <div className="flex-shrink-0 w-6 h-6 mr-2">
                                {pathName === child.url && (
                                  <Image
                                    src={Logowhite}
                                    width={24}
                                    height={24}
                                    alt="Logo Cosmos"
                                  />
                                )}
                              </div>
                              {child.title}
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
                      <div className="flex-shrink-0 w-6 h-6 mr-2">
                        {pathName === item.url && (
                          <Image
                            src={Logowhite}
                            width={24}
                            height={24}
                            alt="Logo Cosmos"
                          />
                        )}
                      </div>
                      {item.title}
                    </div>
                  </Link>
                )
              )
            )}
          </nav>
        ) : null}
      </div>
    </aside>
  );
};

export default Sidebar;
