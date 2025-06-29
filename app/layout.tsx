import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "St. Matthäus Gemeinde - Evangelische Kirche",
  description:
    "Herzlich willkommen in der St. Matthäus Gemeinde. Gottesdienste, Gemeinschaft und Glaube im Herzen der Stadt.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

