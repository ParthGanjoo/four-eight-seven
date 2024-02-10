"use client"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const Carousel = ({ imagePaths }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      x: -currentImage * 100 + "%",
      transition: { duration: 0.5 },
    }))
  }, [currentImage, controls])

  const thumbnails = imagePaths.map((path, index) => {
    return (
      <Image
        key={path}
        src={path}
        alt={`Thumbnail ${index}`}
        onClick={() => setCurrentImage(index)}
        width={1000}
        height={1000}
        className={`ml-6 rounded-full w-14 h-14 object-cover cursor-pointer ${index === currentImage
          ? "ring-2 ring-offset-2 ring-white active:ring-white"
          : "opacity-100"
          }`}
      />
    )
  })

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: -(imagePaths.length - 1) * 100 + "%",
          right: 0,
        }}
        className="flex"
        animate={controls}>
        {imagePaths.map((path, index) => (
          <motion.div key={path} className="flex-none w-full h-full">
            <img
              src={path}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover min-h-screen"
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-col items-start justify-center absolute space-y-2 bottom-4">
        {thumbnails}
      </div>
    </div>
  )
}

export default Carousel
