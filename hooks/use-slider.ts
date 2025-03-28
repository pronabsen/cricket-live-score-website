"use client"

import { useState, useEffect, useCallback } from "react"

interface UseSliderProps {
  totalItems: number
  itemsPerView?: number
  initialIndex?: number
  loop?: boolean
}

export function useSlider({ totalItems, itemsPerView = 3, initialIndex = 0, loop = false }: UseSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [visibleItems, setVisibleItems] = useState(itemsPerView)

  // Determine how many items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 768) {
        setVisibleItems(1.5)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else if (window.innerWidth < 1280) {
        setVisibleItems(2.5)
      } else {
        setVisibleItems(itemsPerView)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [itemsPerView])

  // Calculate the maximum valid index to prevent blank slides
  // We subtract the floor of visibleItems to ensure we don't go beyond valid content
  const maxIndex = Math.max(0, totalItems - Math.floor(visibleItems))

  // Recalculate totalSlides when visibleItems changes
  const totalSlides = maxIndex + 1

  // Ensure currentIndex is valid when visibleItems changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [visibleItems, currentIndex, maxIndex])

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((current) => current - 1)
    } else if (loop) {
      setCurrentIndex(maxIndex)
    }
  }, [currentIndex, loop, maxIndex])

  const goToNext = useCallback(() => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((current) => current + 1)
    } else if (loop) {
      setCurrentIndex(0)
    }
  }, [currentIndex, loop, maxIndex])

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(Math.max(0, index), maxIndex))
    },
    [maxIndex],
  )

  // Calculate if buttons should be disabled
  const isPrevDisabled = !loop && currentIndex === 0
  const isNextDisabled = !loop && currentIndex >= maxIndex

  return {
    currentIndex,
    visibleItems,
    totalSlides,
    maxIndex,
    goToPrevious,
    goToNext,
    goToSlide,
    isPrevDisabled,
    isNextDisabled,
  }
}

