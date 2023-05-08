import React from "react";

export default function CTA() {
    return (
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-20 lg:px-8">
            <div className="relative isolate rounded-3xl overflow-hidden bg-hotpink px-6 py-16 md:mx-8 shadow-2xl sm:rounded-3xl sm:px-6 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="1" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stopColor="#FE8982" />
                            <stop offset={1} stopColor="#FE8982" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-full text-center sm:py-10 lg:mx-0 md:py-10 md:text-5xl md:px-4 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-7xl sm:text-6xl font-bold text-beige">
                        What are you waiting for?
                        <br />
                    </h2>
                    <div className="text-7xl sm:text-6xl font-bold text-beige sm:mt-4">Get your first Stylit now.</div>
                    <p className="mt-6 text-xl text-beige leading-8">
                        We know what we're doing. Returns are fast and seamless in case you don't like something.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <div
                            className="group relative cursor-pointer inline-block overflow-hidden border border-beige px-20 py-3 focus:outline-none focus:ring"
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-beige transition-all group-hover:w-full group-active:bg-salmon"
                            ></span>
                            <span
                                className="relative text-lg font-bold text-beige transition-colors group-hover:text-hotpink">
                                Get started ⇒
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
