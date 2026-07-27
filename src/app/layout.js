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
  verification: {
    google: "qZmi7oKuQSnE1qAwk4OcovlWs0gYHgjUaWKj4Rgisu0",
  },
};

const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html  lang="en" className="scroll-smooth" suppressHydrationWarning>

      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
