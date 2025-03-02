import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galler_img1 from '../assets/elc-gallery-img1.jpg';
import galler_img2 from '../assets/elc-gallery-img2.jpg';
import galler_img3 from '../assets/elc-gallery-img3.jpg';

export default function Gallery() {
  const images = [galler_img1, galler_img2, galler_img3, galler_img1, galler_img2, galler_img3];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => setSelectedImage(null);

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="bg-white pb-[40px]">
      <div className="mx-auto mx-[10%] text-center">
        <h2 className="font-bold tracking-tight text-purple-900 sm:text-4xl text-xl font-montserrat">Gallery</h2>
        <p className="mt-4 mb-6 text-gray-800 md:text-lg text-md font-montserrat">
          Explore student success, engaging classes, and tutor interactions.
        </p>

        {/* Grid for Large Screens, Slider for Small Screens */}
        <div className="hidden md:grid mt-10 pb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(index)}
            >
              <motion.img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mt-10 flex gap-5 overflow-x-scroll px-5 no-scrollbar" ref={sliderRef}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-72 h-48 rounded-xl shadow-lg group cursor-pointer"
              whileTap={{ scale: 0.95 }}
              onClick={() => openLightbox(index)}
            >
              <motion.img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-xl transition-all"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox with Swipe Support */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white bg-gray-900/60 p-3 rounded-full hover:bg-gray-800 transition-all"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-5 text-white bg-gray-900/60 p-3 rounded-full hover:bg-gray-800 transition-all"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image Display with Swipe Effect */}
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-[90%] max-h-[80vh] object-cover rounded-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              whileHover={{ scale: 1.02 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x > 100) prevImage();
                if (info.offset.x < -100) nextImage();
              }}
            />

            {/* Next Button */}
            <button
              className="absolute right-5 text-white bg-gray-900/60 p-3 rounded-full hover:bg-gray-800 transition-all"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
