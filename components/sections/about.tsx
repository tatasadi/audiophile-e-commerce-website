import { Button } from '../ui/button'

export default function About() {
	return (
		<div className=" grid grid-cols-1 lg:grid-cols-2 p-6 gap-6 ">
			<div className="lg:col-start-2">
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet="/shared/desktop/image-best-gear.jpg"
					/>
					<source
						media="(min-width: 768px)"
						srcSet="/shared/tablet/image-best-gear.jpg"
					/>
					<source
						media="(max-width: 767px)"
						srcSet="/shared/mobile/image-best-gear.jpg"
					/>
					<img
						src="/shared/mobile/image-best-gear.jpg"
						alt="earphones"
						className="rounded-lg"
					/>
				</picture>
			</div>
			<div className="p-6 sm:p-16 lg:p-12 flex flex-col justify-center items-start gap-8 lg:col-start-1 lg:row-start-1">
				<h4 className="text-h4 md:text-h2 tracking-[0.08931rem] uppercase">
					Bringing you the{' '}
					<span className="text-burnt-orange">best</span> audio gear
				</h4>
				<p className="text-body-m opacity-50 text-center lg:text-left">
					Located at the heart of New York City, Audiophile is the
					premier store for high end headphones, earphones, speakers,
					and audio accessories. We have a large showroom and luxury
					demonstration rooms available for you to browse and
					experience a wide range of our products. Stop by our store
					to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</div>
	)
}
