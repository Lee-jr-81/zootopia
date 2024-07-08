import { useRouter } from "next/navigation";
import React from "react";

function LoginButton() {
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push("/login")}>
        Log in
      </button>
    </div>
  );
}

export default LoginButton;
