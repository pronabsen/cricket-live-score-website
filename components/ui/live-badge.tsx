export default function LiveBadge() {
  return (
    <div className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-sm font-medium flex items-center gap-1">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
      </span>
      LIVE
    </div>
  )
}

