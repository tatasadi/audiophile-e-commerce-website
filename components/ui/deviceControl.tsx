export default function DeviceControl({ icon, text, className }) {
	return (
		<div className="relative p-4 pt-14">
			<div className="absolute w-full top-0 right-0 flex justify-center items-center">
				<img src={icon} className={className} />
			</div>
			<div className="bg-very-light-gray flex flex-col gap-3 justify-center items-center p-10 rounded-lg">
				<p className="text-h6 tracking-[0.08rem] mb-2 uppercase mt-6">
					{text}
				</p>
				<div className="flex gap-3 items-center">
					<p className="text-[0.8125rem] hover:text-burnt-orange cursor-pointer">
						Shop
					</p>
					<img src="/cart/Path.svg" />
				</div>
			</div>
		</div>
	)
}
