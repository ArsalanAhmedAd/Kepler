import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const FaqCharacteristics = () => {
    const tFaqCharacteristicse = useTranslations("FaqPage");
  return (
    <div className='container mx-auto px-4 py-8 sm:py-10 md:py-14'>
        <div className='flex gap-5 flex-col-reverse sm:flex-row items-center justify-center'>
            <div className='w-full sm:w-[60%]'>
                <div className='text-2xl sm:text-3xl leading-10 font-extrabold lg:text-[40px] lg:leading-[55px] text-gray-100  text-center sm:text-start'>{tFaqCharacteristicse('FaqCharacteristics.Title')}
                </div>
                <div className='text-18 font-normal text-gray-200 lg:text-22 text-center sm:text-start py-4'>{tFaqCharacteristicse('FaqCharacteristics.description')}</div>
            </div>
            <div className='w-[15%]'>
                <Image src="/FaqCharacter.svg" alt='Faq-Character - BrandPos' width={159} height={292}/>
            </div>
        </div>
        
    </div>
  )
}

export default FaqCharacteristics