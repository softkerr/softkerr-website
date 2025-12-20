import { FC, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import Image from 'next/image';

interface VideoPlayerProps {
  video?: {
    src?: string;
    type?: string;
    mobileSrc?: string;
    mobileType?: string;
    desktop?: string;
    mobile?: string;
    previewImage?: string;
  };
  title: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ video, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRefDesktop = useRef<HTMLVideoElement>(null);
  const videoRefMobile = useRef<HTMLVideoElement>(null);

  // Get video sources (support both formats)
  const desktopSrc = video?.src || video?.desktop;
  const mobileSrc = video?.mobileSrc || video?.mobile || desktopSrc;
  const videoType = video?.type || 'video/mp4';
  const mobileType = video?.mobileType || videoType;
  const previewImage = video?.previewImage;

  const handlePlayPause = () => {
    const isMobile = window.innerWidth < 768;
    const videoRef = isMobile ? videoRefMobile : videoRefDesktop;

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Load video on first play if not loaded
        if (!isLoaded) {
          videoRef.current.load();
          setIsLoaded(true);
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  if (!desktopSrc) return null;

  return (
    <div className="relative w-full h-full group/video">
      {/* Show preview image when video is not playing */}
      {!isPlaying && previewImage && (
        <div className="absolute inset-0 z-10">
          <Image
            src={previewImage}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      )}

      {/* Desktop video */}
      <video
        ref={videoRefDesktop}
        className="hidden md:block w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
      >
        <source src={desktopSrc} type={videoType} />
      </video>

      {/* Mobile video */}
      <video
        ref={videoRefMobile}
        className="block md:hidden w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
      >
        <source src={mobileSrc} type={mobileType} />
      </video>

      {/* Play/Pause Button Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 z-20 ${
          isPlaying ? 'opacity-0 group-hover/video:opacity-100' : 'opacity-100'
        }`}
      >
        <motion.button
          onClick={handlePlayPause}
          className="flex items-center gap-3  bg-transparent hover:bg-accent-yellow text-background rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
        >
          {isPlaying ? (
            <>
              <FaPauseCircle className="text-5xl lg:text-8xl" />
            </>
          ) : (
            <>
              <FaPlayCircle className="text-5xl lg:text-8xl" />
            </>
          )}
        </motion.button>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/10 via-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-15" />
    </div>
  );
};

export default VideoPlayer;
