import { Button } from './button'

export default function AudioItem({ icon, title, text }) {
	return (
		<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2">
			<div className="flex justify-center items-center w-[20.4375rem] h-[22rem] md:w-[43.0625rem] lg:w-[33.75rem] lg:h-[20.4375rem] bg-very-light-gray rounded-lg">
				<img src={icon} alt="audio" />
			</div>
			<div className="p-2 flex flex-col justify-center items-center lg:items-start lg:w-1/2 gap-4 md:gap-10">
				<h2 className="text-h2 text-center uppercase">{title}</h2>
				<p className="text-body-m opacity-50 text-center lg:text-left">
					{text}
				</p>
				<Button>See Product</Button>
			</div>
		</div>
	)
}
