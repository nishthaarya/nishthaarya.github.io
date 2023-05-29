import React from 'react'
import outfitPinterest1 from "../../assets/outfits/outfitpinterest1.jpeg"
import outfitPinterest2 from "../../assets/outfits/outfitpinterest2.jpeg"
import Button from '../Button'
import { PopupButton } from "@typeform/embed-react";

function Hero() {
    return (
        <div className='mx-auto w-[80vw] flex justify-center p-10 bg-hotpink my-20 sm:my-8 sm:p-4 sm:h-[70vh] md:my-8 md:h-[60vh]  rounded-xl h-[80vh]'>
            <div className='border-2 border-beige rounded-xl w-full flex flex-row justify-center p-10 sm:p-4'>
                <div className='flex my-auto flex-col space-y-10 mr-10 sm:mr-0 sm:space-y-2 md:space-y-2 md:mr-0'>
                    <div className='text-8xl w-1/3 sm:text-6xl sm:w-[100%] text-beige font-extrabold sm:text-center px-4 my-auto'>Are <br /> you <br /> ready <br /> to <br /> <span className=' font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-beige to-salmon'>unbox?</span>
                    </div>
                    <PopupButton id="qw2dSz6u">
                        <div className=' my-auto px-4 md:py-6'> <Button bgColor="ruby" bgHover="salmon" textHover="ruby" textColor="beige" name="Get your box" /> </div>
                    </PopupButton>
                </div>

                <div className='flex flex-row w-max-content sm:hidden md:hidden space-x-4'>
                    <img alt="outfit" src={outfitPinterest1} className="rounded-xl" />
                    <img alt="outfit" src={outfitPinterest2} className="rounded-xl" />
                </div>
            </div>
        </div>
    )
}
export default Hero