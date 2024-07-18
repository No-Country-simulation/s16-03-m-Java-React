"use client";

import Link from "next/link";
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

const Sidebar = () => {
  const pathName: string = usePathname();

  return (
    <aside className="bg-primary-background sticky top-0 h-screen px-6 py-10">
      <div className="grid gap-4">
        {/* {sidebarLinks.length > 0 &&
          sidebarLinks.map((link: SidebarLinkType, index: number) => (
            <Item key={`sidebar-item-${index}`} data={link} />
          ))} */}
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
                            {child.title}
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
                    {item.title}
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
