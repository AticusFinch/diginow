import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "diginow",
  description:
    "Diginow je osnovan kako bi pružio prilagođena rješenja za mala i srednja preduzeća, kao i nevladine organizacije, razumijevajući dinamiku stalno mijenjajućeg poslovnog svijeta. Nudimo obuke koje će osigurati uspjeh vaših projekata, konsultantske usluge za optimizaciju poslovnih procesa i moderna veb rješenja za jačanje vašeg digitalnog prisustva. Naš cilj nije samo da budemo pružalac usluga, već i dugoročni partner. Sa našim inovativnim pristupom, spremni smo da unaprijedimo vaše poslovanje i napravimo razliku.",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params?.lang || "sr"} className={`${montserrat.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
