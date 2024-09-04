import { Griffy, Jersey_10, Montserrat } from "next/font/google";



export const griffy = Griffy({
    subsets: ["latin"],
    display: "fallback",
    weight: "400",
  });


export const jersey_10 = Jersey_10({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
  });
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','600', '700'],
  display: 'swap'
})