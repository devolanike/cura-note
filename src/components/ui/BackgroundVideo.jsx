function BackgroundVideo({ videoSrc, children }) {
  return (
    <div className="relative w-full min-h-screen">
      {/* The Video Layer - Pinned to the background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* The Content Layer */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default BackgroundVideo;
