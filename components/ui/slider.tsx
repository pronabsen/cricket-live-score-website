"use client"

import { type ReactNode, useRef, useState, useEffect, type TouchEvent, type MouseEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSlider } from "@/hooks/use-slider"
import { cn } from "@/lib/utils"

interface SliderProps {
  children: ReactNode[]
  itemsPerView?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
  itemClassName?: string
  autoPlay?: boolean
  interval?: number
}

export function Slider({
  children,
  itemsPerView = 3,
  showControls = true,
  showIndicators = true,
  className = "",
  itemClassName = "",
  autoPlay = false,
  interval = 5000,
}: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)

  const {
    currentIndex,
    visibleItems,
    goToPrevious,
    goToNext,
    goToSlide,
    isPrevDisabled,
    isNextDisabled,
    totalSlides,
    maxIndex,
  } = useSlider({
    totalItems: children.length,
    itemsPerView,
  })

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || isHovering || isDragging) return

    const timer = setInterval(() => {
      if (!isNextDisabled) {
        goToNext()
      } else {
        goToSlide(0) // Loop back to the beginning
      }
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovering, isDragging, isNextDisabled, goToNext, goToSlide])

  // Touch handlers
  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setCurrentTranslate(-(currentIndex * (100 / visibleItems)))
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return

    const currentX = e.touches[0].clientX
    const diff = ((currentX - startX) / (containerRef.current?.offsetWidth || 1)) * 100
    const newTranslate = currentTranslate + diff

    // Limit the drag to the bounds of the slider
    if (newTranslate > 0 || newTranslate < -((children.length - visibleItems) * (100 / visibleItems))) {
      return
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${newTranslate}%)`
    }
  }

  const handleTouchEnd = () => {
    if (!isDragging) return

    setIsDragging(false)

    if (!containerRef.current) return

    // Get the current transform value
    const style = window.getComputedStyle(containerRef.current)
    const matrix = new WebKitCSSMatrix(style.transform)
    const currentOffset = matrix.m41

    // Calculate which slide to snap to
    const containerWidth = containerRef.current.offsetWidth
    const slideWidth = containerWidth / visibleItems
    const slideIndex = Math.round(Math.abs(currentOffset) / slideWidth)

    // Ensure we don't go beyond the max index
    goToSlide(Math.min(slideIndex, maxIndex))
  }

  // Mouse handlers (for desktop drag)
  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentTranslate(-(currentIndex * (100 / visibleItems)))
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return

    const currentX = e.clientX
    const diff = ((currentX - startX) / (containerRef.current?.offsetWidth || 1)) * 100
    const newTranslate = currentTranslate + diff

    // Limit the drag to the bounds of the slider
    if (newTranslate > 0 || newTranslate < -((children.length - visibleItems) * (100 / visibleItems))) {
      return
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${newTranslate}%)`
    }
  }

  const handleMouseUp = () => {
    handleTouchEnd() // Reuse the touch end handler
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleTouchEnd()
      }
    }

    window.addEventListener("mouseup", handleGlobalMouseUp)
    window.addEventListener("mouseleave", handleGlobalMouseUp)

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp)
      window.removeEventListener("mouseleave", handleGlobalMouseUp)
    }
  }, [isDragging])

  // Calculate the width for each item, handling fractional visibleItems
  const itemWidth = `${100 / children.length}%`

  // Calculate the translateX value, ensuring we don't translate beyond the last valid position
  const translateX = `${-(currentIndex * (100 / visibleItems))}%`

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="overflow-hidden touch-pan-y">
        <div
          ref={containerRef}
          className={cn("flex transition-transform duration-500 ease-out h-full", isDragging ? "transition-none" : "")}
          style={{
            transform: `translateX(${translateX})`,
            width: `${(children.length / visibleItems) * 100}%`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {children.map((child, index) => (
            <div key={index} className={cn("px-1.5 h-full", itemClassName)} style={{ width: itemWidth }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showControls && children.length > visibleItems && (
        <>
          <button
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center z-10 transition-opacity duration-300",
              isPrevDisabled ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100",
            )}
            onClick={goToPrevious}
            disabled={isPrevDisabled}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-3 w-3 text-gray-700" />
          </button>
          <button
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center z-10 transition-opacity duration-300",
              isNextDisabled ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100",
            )}
            onClick={goToNext}
            disabled={isNextDisabled}
            aria-label="Next slide"
          >
            <ChevronRight className="h-3 w-3 text-gray-700" />
          </button>
        </>
      )}

      {showIndicators && totalSlides > 1 && (
        <div className="flex justify-center mt-2 gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-1 h-1 rounded-full transition-all duration-300",
                currentIndex === index ? "bg-blue-600 w-2" : "bg-gray-300 hover:bg-gray-400",
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

