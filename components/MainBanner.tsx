
import Image from 'next/image'
import React from 'react'
// import images from "@/public/banner-home.jpg"
import bg from "@/public/background-Blue.jpg"
// import BannerElement from "@/public/BannerElements/mobile in hand.png"
import BannerElementHome from "@/public/BannerElements/cart with payment-2.png"
// import BannerElementFaq from "@/public/BannerElements/FAQs People.png"
// import BannerIntegration from "@/public/BannerElements/Person mobile group.png"
// import BannerIntegration2 from "@/public/BannerElements/Person-mobile-group-2.png"
// import BannerIntegration3 from "@/public/BannerElements/cart with payment.png"
import Button from './ButtonCustom'


type MainBanner = {
  BannerImage?: string;
  CharacteristicsDescription?: any;
  CharacteristicsImage?: string;
};

const MainBanner = () => {
 
  return (
    <div >
       
        <div style={{ backgroundImage: `url(${bg.src})` }}  className="bg-cover bg-center overflow-hidden xl:min-h-[900px] relative">
      
                <div className='container mx-auto px-4  flex items-center'>
                  <div className='content inline flex-col justify-center'>
                   <div className=" absolute top-2/4 -translate-y-2/4 w-[65%]">
                      <div className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-white flex items-center'>BrandPOS: <br/> Smarter Payments <br/>for Ambitious Businesses</div>
                        <ul className='text-white text-16 lg:text-18 font-bold grid gap-2 md:gap-3 lg:max-w-[55%] py-8'>
                          <li>Kostengünstig abkassieren
                          </li>
                          <li>Mit dem Smartphone oder Tablet Kartenzahlungen oder Zahlungen mittels QR- und Barcode annehmen
                          </li>
                          <li>Einfach und flexibel</li>
                        </ul>
                        <Button> Jetzt App downloaden  </Button>
                    </div>
                   </div>
                </div>
              <Image src={BannerElementHome} alt='' quality={100} className='w-2/4 max-w-[840px] ml-auto pt-20 pb-52 lg:pt-0 -bottom-32 right-0 relative'/>
        
        </div>
    </div>
  )
}

export default MainBanner