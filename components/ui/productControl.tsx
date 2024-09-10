import { Button } from './button'

export default function ProductControl({
	icon,
	text,
	imageClassName,
}) {
	return (
		<div className="p-4 pt-14 flex flex-col justify-center items-center">
			<div className="flex justify-center items-center bg-very-light-gray p-10 rounded-lg">
				<img src={icon} className={imageClassName} />
			</div>
			<p className="text-h6 tracking-[0.08rem] mb-2 uppercase mt-6">
				{text}
			</p>
			<Button>See Product</Button>
		</div>
	)
}
