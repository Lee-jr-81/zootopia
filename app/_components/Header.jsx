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
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

function Header() {
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
        <Button colorScheme="orange" className="gap-2">
          <AddIcon />
          Post ad
        </Button>
        <IconButton
          variant="unstyled"
          aria-label="User profile image"
          as={CircleUserRound}
          color="orange.900"
          _hover={{ color: "orange.700", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Header;
