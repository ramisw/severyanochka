import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.scss"
import {Header} from "@/components/header/Header"
import {Footer} from "@/components/footer/Footer"

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Северяночка",
  icons: '/favicon.svg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
      <Header/>
      <main>
          {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
