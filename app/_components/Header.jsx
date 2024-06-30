import Image from "next/image";
import React from "react";

function Header() {
  return (
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
  );
}

export default Header;
