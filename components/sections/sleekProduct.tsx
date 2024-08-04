import { Button } from '../ui/button'

export default function SleekProduct() {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 p-6 sm:p-20 md:p-4 gap-6">
			<div className="">
				<picture className="">
					<source
						media="(min-width: 1024px)"
						srcSet="/home/desktop/image-earphones-yx1.jpg"
					/>
					<source
						media="(min-width: 768px)"
						srcSet="/home/tablet/image-earphones-yx1.jpg"
					/>
					<source
						media="(max-width: 767px)"
						srcSet="/home/mobile/image-earphones-yx1.jpg"
					/>
					<img
						src="/home/mobile/image-earphones-yx1.jpg"
						alt="earphones"
					/>
				</picture>
			</div>
			<div className="p-[5rem] flex flex-col justify-center items-start gap-8 bg-very-light-gray rounded-lg">
				<h4 className="text-h4 tracking-[0.125rem]">YX1 EARPHONES</h4>
				<Button className="bg-transparent border-[1px] border-black text-black hover:bg-black hover:text-white">
					See Product
				</Button>
			</div>
		</div>
	)
}
