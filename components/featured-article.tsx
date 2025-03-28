import Image from "next/image"
import Link from "next/link"

interface FeaturedArticleProps {
  image: string
  title: string
  date: string
  slug?: string
}

export function FeaturedArticle({ image, title, date, slug = "#" }: FeaturedArticleProps) {
  return (
    <Link href={`/news/${slug}`}>
      <div className="relative overflow-hidden rounded-lg group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">{title}</h3>
          <div className="text-gray-300 text-xs">{date}</div>
        </div>
      </div>
    </Link>
  )
}

