import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  MenuButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Camera, CameraIcon, CircleUserRound, Pointer } from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  extendTheme,
} from "@chakra-ui/react";

import LoginButton from "./LoginButton";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between m-4 md:w-2/3 md:mx-auto items-center">
      <div>
        <Image
          src="/ZoologoSimple.png"
          width={50}
          height={50}
          alt="zootopia logo"
          className="block md:hidden"
        />
        <Image
          src="/Zootopialogo.png"
          width={200}
          height={200}
          alt="zootopia logo"
          className="hidden md:block"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Button
          bg="brand.900"
          color="white"
          className="gap-2"
          _hover={{ bg: "brand.700", cursor: "pointer" }}
        >
          <AddIcon />
          Post ad
        </Button>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <IconButton
            variant="unstyled"
            aria-label="User profile image"
            as={CircleUserRound}
            color="orange.900"
            _hover={{ color: "orange.700", cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
