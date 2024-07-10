import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex mt-16 justify-center">
      <SignUp
        appearance={{
          variables: {
            colorPrimary: "#652b19",
          },
        }}
      />
    </div>
  );
}
