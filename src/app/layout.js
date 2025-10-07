import  {Outfit , Ovo } from "next/font/google";
import "./globals.css";

const outfit  = Outfit ({
 
  subsets: ["latin"],weight:["400","500","600","700"]
});

const ovo  = Ovo({
 
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: "Ravi-Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en" className="scroll-smooth">

      <head>
        <meta name="google-site-verification" content="qZmi7oKuQSnE1qAwk4OcovlWs0gYHgjUaWKj4Rgisu0" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
