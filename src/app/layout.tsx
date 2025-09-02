import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CasinoRoyal - Premium Online Casino & Sports Betting",
  description: "Experience the thrill of premium online gaming with CasinoRoyal. Play slots, table games, live casino, and sports betting with amazing bonuses and jackpots.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}