import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import videoSrc from "@/assets/anns-video.MOV"
import { cn } from "@/lib/utils"

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.key === ' ') e.preventDefault()
      togglePlay()
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Experience <span className="text-primary">Golden Stays</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Take a virtual tour of our premium executive suites and see luxury redefined.
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-luxury group cursor-pointer"
          onClick={togglePlay}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-pressed={isPlaying}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover aspect-video"
            playsInline
            muted={isMuted}
            loop
          />
          
          {/* Overlay gradient */}
          <div className={cn(
            "absolute inset-0 bg-black/40 transition-opacity duration-500 flex items-center justify-center",
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          )}>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
              {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} className="ml-1" fill="currentColor" />}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-6 right-6 flex items-center gap-4 z-20">
            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary/20 hover:text-primary transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>

          {/* Progress bar (aesthetic) */}
          <div className="absolute bottom-0 left-0 h-1 bg-primary/30 w-full">
            <div 
              className="h-full bg-primary transition-all duration-300" 
              style={{ width: isPlaying ? '100%' : '0%', transitionDuration: '20000ms' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
