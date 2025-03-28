import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  image: string
  title: string
  date: string
  slug?: string
}

export function ArticleCard({ image, title, date, slug = "#" }: ArticleCardProps) {
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
          <div className="text-gray-500 text-xs">{date}</div>
        </div>
      </div>
    </Link>
  )
}

