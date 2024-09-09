'use client'
import { useState } from 'react'

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false)
	return (
		<header className="relative flex w-full items-center bg-dark p-8 pb-12">
			{mobileOpen && (
				<div className="fixed inset-0 z-10 bg-black opacity-50 lg:hidden"></div>
			)}

			<div
				className={`relative z-30 mr-auto ml-2  block ${
					mobileOpen ? 'open' : ''
				}`}
				onClick={() => setMobileOpen(preMobileOpen => !preMobileOpen)}
			>
				{mobileOpen ? (
					<img
						src="/icon-menu-close.svg"
						alt="Open"
						className="lg:hidden h-5"
					/>
				) : (
					<img
						src="/icon-menu.svg"
						alt="Close"
						className="lg:hidden h-5"
					/>
				)}
			</div>
			<div className=" z-30 mr-auto md:ml-8 md:w-full">
				<img
					src="/audiophile.svg"
					alt="logo"
					className="w-[8.9375rem]"
				/>
			</div>
			<nav
				className={`fixed left-0 top-0 z-20 h-full w-2/3 pl-6 pt-[9rem] bg-white lg:bg-dark lg:text-white lg:relative lg:pt-0 lg:w-auto lg:mr-20 text-gray ${
					mobileOpen ? 'block' : 'hidden lg:block'
				}`}
			>
				<ul className="flex flex-col items-center gap-6 lg:flex-row leading-6 md:gap-10 lg:mr-16">
					<li>
						<a className="link" href="#">
							HOME
						</a>
					</li>
					<li>
						<a className="link" href="#">
							HEADPHONES
						</a>
					</li>
					<li>
						<a className="link" href="#">
							SPEAKERS
						</a>
					</li>
					<li>
						<a className="link" href="#">
							EARPHONES
						</a>
					</li>
				</ul>
			</nav>
			<div className="md:ml-auto md:mr-1 z-30">
				<img
					src="/shape.svg"
					alt="logo"
					className="min-w-[1.4375rem] lg:h-[2.5rem]"
				/>
			</div>
		</header>
	)
}
