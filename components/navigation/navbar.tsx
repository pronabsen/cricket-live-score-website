import type React from "react"
import Link from "next/link"
import { Calendar, Trophy, BarChart2, Sparkles, Newspaper, Globe, ChevronRight, User } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a1929] text-white">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block text-2xl font-bold">
              Cri<span className="text-red-500">c</span>ketScore360
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            <NavItem href="/schedule" icon={<Calendar className="h-4 w-4" />} label="Schedule" />
            <NavItem href="/series" icon={<Trophy className="h-4 w-4" />} label="Series" />
            <NavItem href="/stats" icon={<BarChart2 className="h-4 w-4" />} label="Criclytics" />
            <NavItem href="/fantasy" icon={<Sparkles className="h-4 w-4" />} label="Fantasy Research" />
            <NavItem href="/news" icon={<Newspaper className="h-4 w-4" />} label="News" />
            <NavItem href="/ipl" icon={<Trophy className="h-4 w-4" />} label="IPL 2025" />
            <NavItem href="/hindi" icon={<Globe className="h-4 w-4" />} label="Hindi News" />
            <NavItem href="/explore" icon={<ChevronRight className="h-4 w-4" />} label="Explore" />
            <NavItem href="/profile" icon={<User className="h-4 w-4" />} label="Profile" />
          </nav>
        </div>
      </div>
    </header>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
}

function NavItem({ href, icon, label }: NavItemProps) {
  return (
    <Link href={href} className="flex items-center gap-1 text-sm font-medium">
      {icon}
      <span>{label}</span>
    </Link>
  )
}

