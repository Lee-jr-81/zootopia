import { AddIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Camera, CameraIcon, CircleUserRound } from "lucide-react";

function Header() {
  return (
    <div>
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
      <div>
        <Button colorScheme="blue" className="gap-2">
          <AddIcon />
          Post ad
        </Button>
        <IconButton
          variant="unstyled"
          aria-label="User profile image"
          as={CircleUserRound}
          color="orange.900"
        />
      </div>
    </div>
  );
}

export default Header;
