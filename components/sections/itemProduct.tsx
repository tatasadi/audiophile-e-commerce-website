import { Button } from '../ui/button'

export default function ItemProduct() {
	return (
		<div className="mx-6 sm:mb-12 ">
			<div className="relative w-full text-black flex flex-col justify-center py-44 sm:pt-56 md:py-20 md:px-4">
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet="/home/desktop/image-speaker-zx7.jpg"
					/>
					<source
						media="(min-width: 768px)"
						srcSet="/home/tablet/image-speaker-zx7.jpg"
					/>
					<source
						media="(max-width: 767px)"
						srcSet="/home/mobile/image-speaker-zx7.jpg"
					/>
					<img
						src="/home/mobile/image-speaker-zx7.jpg"
						alt="speaker"
						className="absolute w-full z-0 inset-0 object-cover rounded-lg"
					/>
				</picture>
				<div className="z-10 p-10 flex flex-col justify-center items-start gap-8">
					<h4 className="text-h4 tracking-[0.125rem]">ZX7 SPEAKER</h4>
					<Button className="bg-transparent border-[1px] border-black text-black hover:bg-black hover:text-white">
						See Product
					</Button>
				</div>
			</div>
		</div>
	)
}
