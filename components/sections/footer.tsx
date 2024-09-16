import Link from 'next/link'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
	return (
		<footer className="flex flex-col w-full justify-center items-center md:items-start bg-dark p-8 gap-12  text-white">
			<div className="w-full flex flex-col items-center md:items-start lg:flex-row lg:justify-between">
				<img
					src="/audiophile.svg"
					alt="logo"
					className="w-[8.9375rem] mt-4"
				/>
				<nav>
					<ul className="flex flex-col md:flex-row items-center gap-6 lg:flex-row leading-6 md:gap-10 mt-4 lg:ml-14">
						<li>
							<Link className="link2" href="/">
								HOME
							</Link>
						</li>
						<li>
							<Link className="link2" href="/headphones">
								HEADPHONES
							</Link>
						</li>
						<li>
							<Link className="link2" href="/speakers">
								SPEAKERS
							</Link>
						</li>
						<li>
							<Link className="link2" href="/earphones">
								EARPHONES
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<p className="text-[0.9375rem] leading-[1.5625rem] opacity-50 lg:w-1/2 text-center sm:text-left">
				Audiophile is an all in one stop to fulfill your audio needs.
				We're a small team of music lovers and sound specialists who
				are devoted to helping you get the most out of personal audio.
				Come and visit our demo facility - we’re open 7 days a week.
			</p>
			<div className="w-full sm:flex sm:justify-between items-center">
				<p className="opacity-50 text-[0.9375rem] leading-[1.5625rem] font-bold text-center mb-4 sm:mb-0">
					Copyright 2021. All Rights Reserved
				</p>
				<div className=" flex gap-6 justify-center items-center lg:mt-[-10rem]">
					<a className="a-link" href="https://facebook.com">
						<BiLogoFacebookSquare />
					</a>
					<a className="a-link" href="https://twitter.com">
						<FaTwitter />
					</a>
					<a className="a-link" href="https://instagram.com">
						<FaInstagram />
					</a>
				</div>
			</div>
		</footer>
	)
}
