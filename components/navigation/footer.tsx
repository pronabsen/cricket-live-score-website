import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 bg-[#0a1929] text-white">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose md:text-left">© 2025 CricketScore360. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}

