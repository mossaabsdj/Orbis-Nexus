"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, User, LogOut, LayoutDashboard, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import Progression from "@/app/component/Proogression/page";

const TEXTS = {
  brandName: "Orbis Nexus",
  navItems: ["Home", "Service 01", "Service 02", "Service 03", "Service 04"],
};

export default function AppNavbar({ select, selected_from_DescoverPage }) {
  const [open, setOpen] = React.useState(false);
  const [SelectedItem, setSelectedItem] = React.useState("Home");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  React.useEffect(() => {
    if (selected_from_DescoverPage) {
      setSelectedItem(selected_from_DescoverPage);
    }
  }, [selected_from_DescoverPage]);

  const handleAction = (action) => {
    switch (action) {
      case "login":
        router.push("/Login");
        break;
      case "logout":
        signOut({ callbackUrl: "/" });
        break;
      case "dashboard":
        router.push("/DashBoard");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isLoading && <Progression isVisible={true} />}

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-neutral-900/80 border-b border-neutral-800 text-gray-100 shadow-md">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4 px-6 py-3 max-w-full mx-auto"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg border border-gray-700 shadow-sm"
            />
            <span className="text-lg font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
              {TEXTS.brandName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-6">
              {TEXTS.navItems.map((item) => (
                <NavigationMenuItem key={item}>
                  <motion.button
                    onClick={() => {
                      select(item);
                      setSelectedItem(item);
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={
                      SelectedItem === item ? { scale: 1.08 } : { scale: 1 }
                    }
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      SelectedItem === item
                        ? "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-neutral-800/50"
                    }`}
                  >
                    {item}
                  </motion.button>
                </NavigationMenuItem>
              ))}

              {/* Account Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-all text-gray-200"
                  >
                    <User className="w-4 h-4" />
                    Account
                  </motion.button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="w-44 bg-neutral-900 border border-neutral-700 text-gray-100 shadow-xl"
                  align="end"
                >
                  {!session ? (
                    <DropdownMenuItem
                      onClick={() => handleAction("login")}
                      className="hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <LogIn className="w-4 h-4" /> Login
                    </DropdownMenuItem>
                  ) : (
                    <>
                      <DropdownMenuItem
                        onClick={() => handleAction("dashboard")}
                        className="hover:bg-neutral-800 flex items-center gap-2"
                      >
                        <LayoutDashboard className="w-4 h-4" /> Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-neutral-700" />
                      <DropdownMenuItem
                        onClick={() => handleAction("logout")}
                        className="hover:bg-neutral-800 flex items-center gap-2 text-red-400 hover:text-red-300"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-200 hover:text-white"
                  aria-label="Toggle menu"
                >
                  {open ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[80%] sm:w-[60%] p-6 bg-neutral-900 text-gray-100 border-r border-neutral-800"
              >
                <div className="space-y-4 mt-4">
                  {TEXTS.navItems.map((item) => (
                    <motion.button
                      key={item}
                      onClick={() => {
                        select(item);
                        setSelectedItem(item);
                        setOpen(false);
                      }}
                      whileTap={{ scale: 0.97 }}
                      animate={
                        SelectedItem === item ? { scale: 1.05 } : { scale: 1 }
                      }
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        SelectedItem === item
                          ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white"
                          : "text-gray-300 hover:bg-neutral-800/50"
                      }`}
                    >
                      {item}
                    </motion.button>
                  ))}

                  {/* Mobile Account Options */}
                  <div className="pt-6 border-t border-neutral-800 space-y-2">
                    {!session ? (
                      <button
                        onClick={() => handleAction("login")}
                        className="w-full text-left px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-neutral-800 flex items-center gap-2"
                      >
                        <LogIn className="w-4 h-4" /> Login
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleAction("dashboard")}
                          className="w-full text-left px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-neutral-800 flex items-center gap-2"
                        >
                          <LayoutDashboard className="w-4 h-4" /> Dashboard
                        </button>
                        <button
                          onClick={() => handleAction("logout")}
                          className="w-full text-left px-4 py-2 rounded-md text-sm text-red-400 hover:bg-red-500/20 flex items-center gap-2"
                        >
                          <LogOut className="w-4 h-4" /> Logout
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </header>
    </>
  );
}
