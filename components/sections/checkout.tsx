'use client'
import React, { useState } from 'react'

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
		<div className="checkout-page">
			<form className="checkout-form" onSubmit={handleSubmit}>
				<h2>CHECKOUT</h2>
				<section className="billing-details">
					<h3>Billing Details</h3>
					<label>
						Name
						<input
							type="text"
							name="name"
							placeholder="Alexei Ward"
							value={billingDetails.name}
							onChange={handleInputChange}
							required
						/>
					</label>
					<div className="flex justify-between items-center ">
						<label>Email Address</label>
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
						className={emailError ? 'input-error' : ''}
						required
					/>
					<label>
						Phone Number
						<input
							type="tel"
							name="phone"
							placeholder="+1 202-555-0136"
							value={billingDetails.phone}
							onChange={handleInputChange}
							required
						/>
					</label>
				</section>
				<section className="shipping-info">
					<h3>Shipping Info</h3>
					<label>
						Address
						<input
							type="text"
							name="address"
							placeholder="1137 Williams Avenue"
							value={shippingInfo.address}
							onChange={handleInputChange}
							required
						/>
					</label>
					<label>
						ZIP Code
						<input
							type="text"
							name="zipCode"
							placeholder="10001"
							value={shippingInfo.zipCode}
							onChange={handleInputChange}
							required
						/>
					</label>
					<label>
						City
						<input
							type="text"
							name="city"
							placeholder="New York"
							value={shippingInfo.city}
							onChange={handleInputChange}
							required
						/>
					</label>
					<label>
						Country
						<input
							type="text"
							name="country"
							placeholder="United States"
							value={shippingInfo.country}
							onChange={handleInputChange}
							required
						/>
					</label>
				</section>
				<section className="payment-details">
					<h3>Payment Details</h3>
					<label>
						Payment Method
						<div>
							<label>
								<input
									type="radio"
									name="paymentMethod"
									value="eMoney"
									checked={paymentMethod === 'eMoney'}
									onChange={handlePaymentChange}
								/>
								e-Money
							</label>
							<label>
								<input
									type="radio"
									name="paymentMethod"
									value="cashOnDelivery"
									checked={paymentMethod === 'cashOnDelivery'}
									onChange={handlePaymentChange}
								/>
								Cash on Delivery
							</label>
						</div>
					</label>
				</section>
				<button type="submit">CONTINUE</button>
			</form>
			<div className="summary">
				<h3>SUMMARY</h3>
				<div className="summary-items"></div>
				<div className="summary-totals">
					<div className="total-line">
						<p>Total</p>
						<p>$5,396</p>
					</div>
					<div className="total-line">
						<p>Shipping</p>
						<p>$50</p>
					</div>
					<div className="total-line">
						<p>VAT (Included)</p>
						<p>$1,079</p>
					</div>
					<div className="total-line grand-total">
						<p>GRAND TOTAL</p>
						<p>$5,446</p>
					</div>
				</div>
				<button className="continue-button">CONTINUE</button>
			</div>
		</div>
	)
}
