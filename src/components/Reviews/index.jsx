import React from 'react'

function Reviews() {
    return (
        <section class="bg-teal">
            <div class="mx-auto max-w-screen-xl px-4 py-16 md:px-8 sm:px-6 sm:py-24 lg:px-8 2xl:w-[80vw]">
                <h2 class="text-center text-5xl text-beige font-bold tracking-tight sm:text-5xl">
                    Read trusted reviews from our customers
                </h2>

                <div class="mt-12 grid grid-cols-3 gap-4 md:grid-cols-1 sm:grid-cols-1 md:gap-8">
                    <blockquote class="rounded-lg bg-beige p-8">
                        <div class="flex items-center gap-4">
                            <img
                                alt="woman"
                                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                class="h-16 w-16 rounded-full object-cover"
                            />

                            <div>
                                <p class="mt-1 text-xl font-bold text-hotpink">Perfectly Curated Outfits On A Budget!</p>
                            </div>
                        </div>

                        <p class="line-clamp-2 sm:line-clamp-none 2xl:line-clamp-none mt-4 text-hotpink">
                            Stylit blew me away with their ability to curate a fantastic outfit based on my preferences. The surprise box arrived quickly, and the clothes fit like a dream. A stylish and hassle-free shopping experience! <br /> -Ojas Thakur
                        </p>
                    </blockquote>
                    <blockquote class="rounded-lg bg-beige p-8">
                        <div class="flex items-center gap-4">
                            <img
                                alt="woman"
                                src="https://images.unsplash.com/photo-1558377235-802c801ab268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                                class="h-16 w-16 rounded-full object-cover"
                            />
                            <div>

                                <p class="mt-1 text-xl font-bold text-hotpink">Personal Styling Made So Damn Easy!</p>
                            </div>
                        </div>

                        <p class="line-clamp-2 sm:line-clamp-none mt-4 2xl:line-clamp-none text-hotpink">
                            I'm in love with Stylit! They took my personal style into account and sent me a surprise outfit that exceeded my expectations. Great quality and a fun way to discover new fashion favorites! <br /> -Shreya Jaiswal
                        </p>
                    </blockquote>
                    <blockquote class="rounded-lg bg-beige p-8">
                        <div class="flex items-center gap-4">
                            <img
                                alt="woman"
                                src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                                class="h-16 w-16 rounded-full object-cover"
                            />

                            <div>

                                <p class="mt-1 text-xl font-bold text-hotpink">Refreshing Wardrobe Surprise!</p>
                            </div>
                        </div>

                        <p class="line-clamp-2 sm:line-clamp-none mt-4 2xl:line-clamp-none text-hotpink">
                            Stylit is a game-changer! The surprise outfit they sent was spot-on for my taste and fit perfectly. It's an exciting way to update your wardrobe without the stress of shopping. Highly recommended! <br /> -Ridhi Datta
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>


    )
}

export default Reviews