import React, {ReactElement} from "react";
import Image from "next/image";
import Portfolio from "../../layouts/Portfolio";

export default function MyWork(){
    return(<>
    <div className="py-16 bg-opacity-60 bg-black flex justify-center items-center mx-auto">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <Image src="/wake-mod-co-60w.jpg" alt="image" loading="lazy" width={550} height={550} />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-amber-300 font-bold md:text-4xl">Designing and Manufacturing High-Quality Vape Devices: Our Commitment to Innovation and Quality</h2>
          <p className="mt-6 text-white">Our company specializes in the design and manufacturing of high-quality vape devices. We understand that the vaping industry is constantly evolving, and we are committed to staying at the forefront of innovation.</p>
          <p className="mt-4 text-white"> Our team of experienced engineers and designers work tirelessly to develop cutting-edge vape devices that deliver exceptional performance and are easy to use. We use only the highest quality materials and components to ensure that our devices are durable and reliable.</p>
          <p className="mt-4 text-white"> In addition to designing and manufacturing vape devices, we also offer customization services to meet the unique needs of our customers. Whether you are looking for a particular color or finish, or you want to add your own branding or logo, we can work with you to create a device that is tailored to your specific requirements.</p>
        </div>
      </div>
  </div>
</div>
    </>)
}

MyWork.getLayout = function getLayout(page: ReactElement) {
    return (
      <Portfolio>
        {page}
      </Portfolio>
    )
}
