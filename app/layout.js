import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Zootopia",
  description: "Pets classifieds website which makes a difference",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children} </Provider>
      </body>
    </html>
  );
}
