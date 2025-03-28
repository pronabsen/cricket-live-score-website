import Link from "next/link"
import { Trophy } from "lucide-react"
import ArticleCard from "@/components/article/article-card"

export default function IPLCornerSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          <h2 className="font-bold">IPL Corner</h2>
        </div>
        <Link href="/ipl" className="text-blue-600 text-sm">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ArticleCard
          image="/placeholder.svg?height=100&width=150"
          title="Virat Kohli Sets All-Time IPL Record At Chepauk, Becomes Official CSK Nemesis"
          source="cricket.com staff"
          date="28 Mar 2025"
          slug="virat-kohli-ipl-record-chepauk"
        />

        <ArticleCard
          image="/placeholder.svg?height=100&width=150"
          title="SRH Don't Need Head And Abhishek To Fire Every Game: Brian Lara"
          source="cricket.com"
          date="28 Mar 2025"
          slug="srh-brian-lara-comments"
        />
      </div>
    </div>
  )
}

