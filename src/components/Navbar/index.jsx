import React from 'react'

function Navbar() {
    return (
        <header aria-label="Site Header" className="border-b border-hotpink">
            <div
                className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
            >
                <div className="flex items-center gap-4">
                    <div className="text-teal text-3xl tracking-wide font-bold 2xl:pl-6"> stylit </div>
                </div>

                <div className="flex flex-1 items-center justify-end gap-12">
                    <nav
                        aria-label="Site Nav"
                        className="sm:hidden flex gap-10 md:flex md:gap-10 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-hotpink"
                    >
                        <a
                            href="/about"
                            className="block text-lg h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-ruby "
                        >
                            About
                        </a>

                        <a
                            href="/news"
                            className="block h-16 text-lg border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-ruby"
                        >
                            Blog
                        </a>

                        <a
                            href="/products"
                            className="block text-lg h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-ruby"
                        >
                            How It Works
                        </a>

                        <a
                            href="/contact"
                            className="block text-lg h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-ruby"
                        >
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center">
                        <div className="flex items-center border-x border-hotpink">
                            <span className="border-e border-e-hotpink">
                                <a
                                    href="/cart"
                                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-ruby"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="teal"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>

                                    <span className="sr-only">Cart</span>
                                </a>
                            </span>

                            <span className="border-e border-e-hotpink">
                                <a
                                    href="/account"
                                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-ruby"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="teal"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>

                                    <span className="sr-only"> Account </span>
                                </a>
                            </span>

                            <span className="hidden sm:block">
                                <a
                                    href="/search"
                                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-ruby"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="teal"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>

                                    <span className="sr-only"> Search </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar