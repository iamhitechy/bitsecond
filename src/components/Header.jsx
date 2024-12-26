import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>HIT<span className='text-blue-400 dark:text-blue-600'>ESH</span></h1></a>
            <div className='gap-4 flex items-center '>
                {/* Social media icons */}
                <a href="https://www.instagram.com/be.youuh/" target="_blank" rel="noreferrer" className="text-blue-400 dark:text-blue-600 hover:text-blue-600 dark:hover:text-blue-400">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/hitesh-chaudhary-707592339/" target="_blank" rel="noreferrer" className="text-blue-400 dark:text-blue-600 hover:text-blue-600 dark:hover:text-blue-400">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/iamhitechy" target="_blank" rel="noreferrer" className="text-blue-400 dark:text-blue-600 hover:text-blue-600 dark:hover:text-blue-400">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400 dark:text-blue-600 hover:text-blue-600 dark:hover:text-blue-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}
