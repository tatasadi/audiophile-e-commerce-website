export default function DeviceControl({ icon, text }) {
	return (
		<div className="flex flex-col justify-center items-center bg-very-light-gray mt-10 md:my-10 md:mx-2 w-[20.4375rem] md:w-[13.9375rem] lg:w-[21.875rem] h-[10.3125rem] lg:h-[12.75rem]">
			<img src={icon} className="mt-[-5rem] mb-4 md:mb-6 " />
			<p className="text-h6 tracking-[0.08rem] mb-2 md:mb-6 uppercase">
				{text}
			</p>
			<div className="flex gap-3 items-center">
				<p className="text-[0.8125rem] hover:text-burnt-orange cursor-pointer">
					Shop
				</p>
				<img src="/cart/Path.svg" />
			</div>
		</div>
	)
}
