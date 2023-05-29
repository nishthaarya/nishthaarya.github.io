import React from 'react'

function Button({ name, link }) {
    return (
        <div
            className="group relative cursor-pointer inline-block overflow-hidden border border-beige px-20 sm:px-10 sm:mt-4 py-3 focus:outline-none focus:ring"
        >
            <span
                className="absolute inset-y-0 left-0 w-[2px] bg-beige transition-all group-hover:w-full group-active:bg-salmon"
            ></span>
            <span
                className="relative text-lg font-bold text-beige transition-colors group-hover:text-hotpink">
                {name} ⇒
            </span>
        </div>
    )
}

export default Button;