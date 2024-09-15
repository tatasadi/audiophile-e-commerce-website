import { Button } from './button'

export default function CheckoutModal() {
	return (
		<div className="relative flex flex-col justify-center items-center pt-32">
			<div className="fixed inset-0 bg-black opacity-50"></div>
			<div className="relative p-8 w-[20.4375rem] md:w-[33.75rem] bg-white rounded-lg z-10">
				<div className="mb-6">
					<img
						src="/checkout/icon-order-confirmation.svg"
						alt="logo"
					/>
				</div>
				<h2 className="text-h5 tracking-[0.05356rem]">
					THANK YOU
					<br /> FOR YOUR ORDER
				</h2>
				<p className="text-body-m opacity-50 my-8">
					You will receive an email confirmation shortly.
				</p>
				<div className="md:flex md:min-h-[8.75rem] w-full">
					<div className="bg-very-light-gray w-full flex flex-col justify-center items-center p-6 rounded-t-lg md:rounded-bl-lg md:rounded-tr-none">
						<div className="flex justify-center items-center gap-5 border-b-2">
							<img
								src="/cart/image16.png"
								alt="headphone"
								className="w-7 h-8"
							/>
							<div>
								<h3 className="text-body-m font-bold">XX99 MK II</h3>
								<p className="text-[0.875rem] font-bold leading-[1.5625rem] opacity-50 mb-2">
									$ 2,999
								</p>
							</div>
							<p className="mt-[-2rem] ml-5">x1</p>
						</div>
						<div>
							<p className="text-[.75rem] font-bold tracking-[-0.01338rem] opacity-50 mt-4">
								and 2 other item(s)
							</p>
						</div>
					</div>
					<div className="bg-black w-full text-white p-6 md:px-8 md:py-10 rounded-b-lg md:rounded-tr-lg md:rounded-bl-none">
						<h4 className="md:my-4 opacity-50">GRAND TOTAL</h4>
						<p>$ 5,446</p>
					</div>
				</div>
				<Button className="w-full mt-8">BACK TO HOME</Button>
			</div>
		</div>
	)
}
