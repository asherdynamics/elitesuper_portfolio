import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../../utils/photos";

const PhotoGallery = () => {
  return (
    <div className="container mx-auto pt-20 z-10">
      <Gallery photos={photos} />
    </div>
  );
};

export default PhotoGallery;