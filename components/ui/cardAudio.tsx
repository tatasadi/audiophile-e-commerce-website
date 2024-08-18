import { Button } from './button'

export default function CardAudio({ icon, text, imageClassName }) {
	return (
		<div className="flex flex-col gap-3 justify-center items-center p-10 rounded-lg">
			<div className="flex justify-center items-center bg-very-light-gray p-8 rounded-lg">
				<img src={icon} className={imageClassName} />
			</div>
			<div className="flex flex-col justify-center items-center">
				<p className="text-h6 tracking-[0.08rem] my-6 uppercase">
					{text}
				</p>
				<Button>See Product</Button>
			</div>
		</div>
	)
}
