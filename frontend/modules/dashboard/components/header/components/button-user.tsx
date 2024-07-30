import { FC } from "react";

import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@/components/ui/icon";
import { logout } from "@/modules/auth/actions/auth";
import { useUserStore } from "@/store/use.store";

const ButtonUser: FC = () => {
  const { user } = useUserStore((state) => state);

  console.log("user=<", user);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="flex items-center justify-center"
        >
          <Icon name="ic_notify" className="h-7" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="flex items-center justify-center"
        >
          <Icon name="ic_chat" className="h-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex items-center justify-center"
            >
              <Icon name="ic_user" className="h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuGroup className="flex flex-col gap-1 p-2">
              <p className="font-medium">{user?.name}</p>
              <p className="text-muted-foreground w-[200px] truncate text-sm">
                {user?.mail}
              </p>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="flex items-center gap-2"
                onClick={async () => {
                  await logout();
                }}
              >
                <LogOut className="h-4 w-4" />
                <p className="text-sm">Cerrar sesión</p>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ButtonUser;
