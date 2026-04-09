import React from "react";

const PromoVideo = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full relative bg-black flex items-center justify-center overflow-hidden leading-none">
        <video
          className="w-full h-auto object-cover block pointer-events-none m-0 p-0"
          src="/videos/campaign.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          style={{
             WebkitUserSelect: "none",
             userSelect: "none"
          }}
        />
      </div>
    </section>
  );
};

export default PromoVideo;
