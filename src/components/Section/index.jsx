import React from 'react';
import form from "../../assets/icons/form.svg";
import clothes from "../../assets/icons/clothes.svg";
import address from "../../assets/icons/address.svg";
import payment from "../../assets/icons/payment.svg";
import gift from "../../assets/icons/gift.svg";
import dress from "../../assets/icons/dress.svg";
import { PopupButton } from "@typeform/embed-react";

function Section() {
    return (

        <section>
            <div className="max-w-screen-xl mx-auto w-[80vw] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div
                    className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                    <div
                        className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                    >
                        <h2 className="text-5xl text-teal font-bold">What is <span>stylit?</span></h2>

                        <p className="my-4 text-xl text-teal">
                            We're bringing personal styling to the common woman. Getting a personalised outfit
                            is now easy and affordable! We know shopping online can be extremely overwhelming, so fill out
                            a form, set back and relax- We'll handle your styling needs for you. Whether it's a date night outfit,
                            an office day outfit, a beach outfit, we've got you covered!
                        </p>
                        <PopupButton id="qw2dSz6u">
                            <div
                                className="group relative cursor-pointer inline-block overflow-hidden border border-hotpink mt-4 px-20 sm:px-10 py-3 focus:outline-none focus:ring"
                            >
                                <span
                                    className="absolute inset-y-0 left-0 w-[2px] bg-hotpink transition-all group-hover:w-full group-active:bg-salmon"
                                ></span>
                                <span
                                    className="relative text-lg font-bold text-teal transition-colors group-hover:text-beige">
                                    Get started now ⇒
                                </span>
                            </div>
                        </PopupButton>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                        <a
                            className="block rounded-xl border-2 border-hotpink p-4 shadow-sm hover:border-hotpink hover:ring-1 hover:ring-salmon focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span className="inline-block">
                                <img className='w-[50px]' alt="form" src={form} />
                            </span>

                            <h2 className="mt-2 font-bold text-xl text-teal"> Step 1</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-teal">
                                Fill out our interactive form and tell us your preferences.
                            </p>
                        </a>
                        <a
                            className="block rounded-xl border-2 border-hotpink p-4 shadow-sm hover:border-hotpink hover:ring-1 hover:ring-salmon focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span className="inline-block">
                                <img className='w-[50px]' alt="form" src={clothes} />
                            </span>

                            <h2 className="mt-2 font-bold text-xl text-teal"> Step 2</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-teal">
                                Go into detail- what's the occasion? Are there any patterns you don't like? Sleeves- yes or no?
                            </p>
                        </a>
                        <a
                            className="block rounded-xl border-2 border-hotpink p-4 shadow-sm hover:border-hotpink hover:ring-1 hover:ring-salmon focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span className="inline-block">
                                <img className='w-[50px]' alt="form" src={address} />
                            </span>

                            <h2 className="mt-2 font-bold text-xl text-teal"> Step 3</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-teal">
                                Add your address and billing details, along with any special requests you may have.
                            </p>
                        </a>
                        <a
                            className="block rounded-xl border-2 border-hotpink p-4 shadow-sm hover:border-hotpink hover:ring-1 hover:ring-salmon focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span className="inline-block">
                                <img className='w-[50px]' alt="form" src={payment} />
                            </span>

                            <h2 className="mt-2 font-bold text-xl text-teal"> Step 4</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-teal">
                                Complete the payment using one of many payment modes available.
                            </p>
                        </a>
                        <a
                            className="block rounded-xl border-2 border-hotpink p-4 shadow-sm hover:border-hotpink hover:ring-1 hover:ring-salmon focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span className="inline-block">
                                <img className='w-[50px]' alt="form" src={gift} />
                            </span>

                            <h2 className="mt-2 font-bold text-xl text-teal"> Step 5</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-teal">
                                Sit back and relax- our best minds are going to pick out an absolutely gorgeous outfit for you!
                            </p>
                        </a>
                        <a
                            className="block rounded-xl border-2 border-hotpink p-4 shadow-sm hover:border-hotpink hover:ring-1 hover:ring-salmon focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span className="inline-block">
                                <img className='w-[50px]' alt="form" src={dress} />
                            </span>

                            <h2 className="mt-2 font-bold text-xl text-teal"> Step 6</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-teal">
                                Flaunt your brand new, personally styled outfit! Tag us to get featured on our socials.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section