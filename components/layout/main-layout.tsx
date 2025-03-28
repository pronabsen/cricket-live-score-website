import type { ReactNode } from "react"
import Navbar from "@/components/navigation/navbar"
import Footer from "@/components/navigation/footer"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">{children}</main>
      <Footer />
    </div>
  )
}

