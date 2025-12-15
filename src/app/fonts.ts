import { Josefin_Sans, Cardo } from "next/font/google";

export const josefin = Josefin_Sans({
    subsets: ["latin"],
    variable: "--font-josefin",
    display: "swap",
});

export const cardo = Cardo({
    subsets: ["latin"],
    variable: "--font-cardo",
    weight: ["400", "700"],
    display: "swap",
});