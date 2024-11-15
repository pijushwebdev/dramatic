import { Griffy, Montserrat, Style_Script } from "next/font/google";



export const griffy = Griffy({
    subsets: ["latin"],
    display: "fallback",
    weight: "400",
  });


export const style_Script = Style_Script({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
  });
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','600', '700'],
  display: 'swap'
})

