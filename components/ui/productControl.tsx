import { Button } from './button'

export default function ProductControl({
	image
	text,
}) {
	return (
		<div className="p-4 pt-14">
			<div className=" w-full flex justify-center items-center bg-very-light-gray">
				{image}
			</div>
			<p className="text-h6 tracking-[0.08rem] mb-2 uppercase mt-6">
				{text}
			</p>
			<Button>See Product</Button>
		</div>
	)
}
