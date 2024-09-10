import { Button } from '../ui/button'

export default function ProductDetail({ image, text, title, price }) {
	return (
		<div className="flex flex-col md:flex-row gap-3 md:gap-16 justify-center items-center py-10 rounded-lg">
			<div className="flex w-full justify-center items-center bg-very-light-gray p-8 rounded-lg">
				{image}
			</div>
			<div className="flex flex-col justify-center items-center md:items-start">
				<h2 className="text-h4 uppercase">{title}</h2>
				<p className="text-[0.9375rem] leading-[1.5625rem]  my-6 opacity-50">
					{text}
				</p>
				<p className="text-h6 my-5">{price}</p>
				<div className="flex justify-center items-center gap-5">
					<div className="flex gap-5 justify-center items-center bg-very-light-gray py-3 px-5">
						<button className="opacity-25 w-4">-</button>
						<p>1</p>
						<button className="opacity-25 w-4">+</button>
					</div>
					<Button>ADD TO CART</Button>
				</div>
			</div>
			<div></div>
		</div>
	)
}
