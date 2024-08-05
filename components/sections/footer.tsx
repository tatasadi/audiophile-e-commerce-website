export default function Footer() {
	return (
		<footer className="flex flex-col w-full items-center md:items-start bg-dark p-8 gap-12  text-white">
			<div className="lg:grid lg:grid-cols-2 lg:gap-20">
				<div className="mt-4">
					<img
						src="/audiophile.svg"
						alt="logo"
						className="w-[8.9375rem]"
					/>
				</div>
				<nav>
					<ul className="flex flex-col md:flex-row items-center gap-6 lg:flex-row leading-6 md:gap-10 mt-4 lg:ml-14">
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
			</div>
			<p className="opacity-50 lg:w-1/2">
				Audiophile is an all in one stop to fulfill your audio needs.
				We're a small team of music lovers and sound specialists who
				are devoted to helping you get the most out of personal audio.
				Come and visit our demo facility - we’re open 7 days a week.
			</p>
			<div>
				<p className="opacity-50">
					Copyright 2021. All Rights Reserved
				</p>
			</div>
		</footer>
	)
}
