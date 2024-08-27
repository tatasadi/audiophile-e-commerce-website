'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'

export default function Checkout() {
	const [billingDetails, setBillingDetails] = useState({
		name: '',
		email: '',
		phone: '',
	})

	const [shippingInfo, setShippingInfo] = useState({
		address: '',
		zipCode: '',
		city: '',
		country: '',
	})
	const [emailError, setEmailError] = useState('')

	const handleInputChange = (e: {
		target: { name: any; value: any }
	}) => {
		const { name, value } = e.target
		if (name === 'email') {
			validateEmail(value)
		}
		setBillingDetails({ ...billingDetails, [name]: value })
	}

	const validateEmail = (email: string) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailPattern.test(email)) {
			setEmailError('Wrong format')
		} else {
			setEmailError('')
		}
	}

	const [paymentMethod, setPaymentMethod] = useState('eMoney')

	const handlePaymentChange = (e: {
		target: { value: React.SetStateAction<string> }
	}) => {
		setPaymentMethod(e.target.value)
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
	}
	return (
		<div className="lg:flex lg:justify-between p-8">
			<form
				className="flex flex-col bg-white p-6"
				onSubmit={handleSubmit}
			>
				<h2 className="text-h4 tracking-[0.0625rem] my-6">
					CHECKOUT
				</h2>
				<section>
					<h3 className="link4">Billing Details</h3>
					<label className="link3">Name</label>
					<input
						type="text"
						name="name"
						placeholder="Alexei Ward"
						value={billingDetails.name}
						onChange={handleInputChange}
						className="checkinput"
						required
					/>
					<div className="flex justify-between items-center">
						<label className="link3">Email Address</label>
						{emailError && (
							<p className="text-dark-red text-[0.75rem]">
								{emailError}
							</p>
						)}
					</div>
					<input
						type="email"
						name="email"
						placeholder="alexei@mail.com"
						value={billingDetails.email}
						onChange={handleInputChange}
						className={`checkinput ${emailError ? 'input-error' : ''}`}
						required
					/>
					<label className="link3">Phone Number</label>
					<input
						type="tel"
						name="phone"
						placeholder="+1 202-555-0136"
						value={billingDetails.phone}
						onChange={handleInputChange}
						className="checkinput"
						required
					/>
				</section>
				<section>
					<h3 className="link4">Shipping Info</h3>
					<label className="link3">Address</label>
					<input
						type="text"
						name="address"
						placeholder="1137 Williams Avenue"
						value={shippingInfo.address}
						onChange={handleInputChange}
						className="checkinput"
						required
					/>
					<label className="link3">ZIP Code</label>
					<input
						type="text"
						name="zipCode"
						placeholder="10001"
						value={shippingInfo.zipCode}
						onChange={handleInputChange}
						className="checkinput"
						required
					/>
					<label className="link3">City</label>
					<input
						type="text"
						name="city"
						placeholder="New York"
						value={shippingInfo.city}
						onChange={handleInputChange}
						className="checkinput"
						required
					/>
					<label className="link3">Country</label>
					<input
						type="text"
						name="country"
						placeholder="United States"
						value={shippingInfo.country}
						onChange={handleInputChange}
						className="checkinput"
						required
					/>
				</section>
				<section>
					<h3 className="link4">Payment Details</h3>
					<p className="link3 mt-6">Payment Method</p>
					<div className="flex flex-col gap-4 mt-4">
						<label
							className={`payment link5 ${paymentMethod === 'e-Money' ? 'selected' : ''}`}
						>
							<input
								type="radio"
								name="paymentMethod"
								value="e-Money"
								checked={paymentMethod === 'e-Money'}
								onChange={handlePaymentChange}
							/>
							e-Money
						</label>
						<label
							className={`payment link5 ${paymentMethod === 'Cash on Delivery' ? 'selected' : ''}`}
						>
							<input
								type="radio"
								name="paymentMethod"
								value="Cash on Delivery"
								checked={paymentMethod === 'Cash on Delivery'}
								onChange={handlePaymentChange}
							/>
							Cash on Delivery
						</label>
						<label className="link3">e-Money Number</label>
						<input
							type="text"
							name="e-Money Number"
							placeholder="238521993"
							value={shippingInfo.country}
							onChange={handleInputChange}
							className="paymentinput"
							required
						/>
						<label className="link3">e-Money PIN</label>
						<input
							type="text"
							name="e-Money PIN"
							placeholder="6891"
							value={shippingInfo.country}
							onChange={handleInputChange}
							className="paymentinput"
							required
						/>
					</div>
				</section>
			</form>
			<div className="p-5 bg-white rounded-lg min-w-[21rem] max-h-[38.25rem]">
				<h3 className="text-h6 tracking-[0.08038rem] mb-6">
					SUMMARY
				</h3>
				<div className="mb-5">
					<div className="total-line">
						<p className="total-pay">Total</p>
						<p className="text-h6">$0</p>
					</div>
					<div className="total-line">
						<p className="total-pay">Shipping</p>
						<p className="text-h6">$50</p>
					</div>
					<div className="total-line">
						<p className="total-pay">VAT (Included)</p>
						<p className="text-h6">$0</p>
					</div>
					<div className="total-line font-bold mt-6">
						<p className="total-pay">GRAND TOTAL</p>
						<p className="text-h6 text-burnt-orange">$0</p>
					</div>
				</div>
				<Button className="w-full mt-4">CONTINUE & PAY</Button>
			</div>
		</div>
	)
}
