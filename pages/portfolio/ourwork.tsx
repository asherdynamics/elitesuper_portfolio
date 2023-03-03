import React, {ReactElement} from "react";
import PhotoGallery from "../../components/Gallery/PhotoGallery";
import Portfolio from "../../layouts/Portfolio";

export default function OurWork(){
    return(<>
    <div className="flex min-h-screen items-center justify-center z-10">
        <div className="lg:max-w-7xl mx-auto">
          <PhotoGallery />
        </div>
      </div>
    </>)
}

OurWork.getLayout = function getLayout(page: ReactElement) {
    return (
      <Portfolio>
        {page}
      </Portfolio>
    )
}
