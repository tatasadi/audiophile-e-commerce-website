import { Button } from '../ui/button'

export default function ProductDetail({
	icon,
	text,
	title,
	price,
	text2,
}) {
	return (
		<div className="flex flex-col gap-3 justify-center items-center p-10 rounded-lg">
			<div className="flex justify-center items-center bg-very-light-gray p-8 rounded-lg">
				<img src={icon} />
			</div>
			<div className="flex flex-col justify-center items-center">
				<h2 className="text-h4 uppercase">{title}</h2>
				<p className="text-[0.9375rem] leading-[1.5625rem]  my-6 opacity-50">
					{text}
				</p>
				<p className="text-h6 my-5">{price}</p>
				<Button>ADD TO CART</Button>
			</div>
			<div>
				<h3 className="text-h5">FEATURES</h3>
				<p className="text-[0.9375rem] leading-[1.5625rem]  my-6 opacity-50">
					{text2}
				</p>
			</div>
		</div>
	)
}
