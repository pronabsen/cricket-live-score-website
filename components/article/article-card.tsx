import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  image: string
  title: string
  source: string
  date: string
  slug?: string
}

export default function ArticleCard({ image, title, source, date, slug = "#" }: ArticleCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <div className="flex gap-3 group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={150}
          height={100}
          className="w-24 h-20 object-cover rounded-md"
        />
        <div className="flex flex-col justify-between">
          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{source}</span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

